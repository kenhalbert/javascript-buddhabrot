import CanvasDrawer from './drawing/CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';
import DensityPlot from './math/DensityPlot';
import { scale } from './drawing/drawUtils';
import BuddhabrotWorker from 'worker?inline!./generateBuddhabrotPointsWorker.js';

const getColor = (density, rgbVal, highestDensity) => {
    return Math.floor(density * rgbVal / highestDensity);
};

const rebaseColors = (imagePlot, drawer, config) => {  // TODO the scaling problem can be solved by keeping a second density plot representing the image itself in memory and checking if the density in the plot is greater than the new one to plot before calling setPixel
    const imageScale = config.imageScale;
    console.log('rebasing colors...');
	for (let h = 0; h < imagePlot.width; h++) {
        for (let k = 0; k < imagePlot.height; k++) {
            const srcDensity = imagePlot.getDensity(h, k);
            const red = getColor(srcDensity, 255, imagePlot.highestDensity); // TODO make color configurable and allow to be changed after render
            drawer.setPixel(h, k, red, 0, 0, 255);  // TODO also consider allowing to save and load density plots, and inject coloring strategy to allow possibilities beyond monochrome
        }
    }
    console.log('done rebasing colors');
};

const initCanvas = (drawer, config) => {
    const imageWidth = config.imageWidth,
        imageHeight = config.imageHeight;

    for (let h = 0; h < imageWidth; h++) {
        for (let k = 0; k < imageHeight; k++) {
            drawer.setPixel(h, k, 0, 0, 0, 255);  
        }
    }

    drawer.updateCanvas();
};

const drawPoints = (sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions) => {
    for (let i = 0; i < pointsToPlot.length; i++) {

        // First, add 2 & 1.5 to the real and imaginary components (respectively) to ensure that all points are translated to the positive quadrant of the complex plane.
        const translatedReal = pointsToPlot[i].re + 2,
            translatedImaginary = pointsToPlot[i].im + 1.5;

        // Then, multiply the sum by a scale factor to fit the image to the density plot, and achieve the desired level of detail.
        // For example, if you want to plot the image on a 600x600 density plot, the scale should be 200 because the figure is plotted on a
        // 3x3 region of the complex plane.  s = d / 3, where s is the scale & d is the width/height of the square region being rendered into.
        const scaledReal = scale(translatedReal, plotScale),
            scaledImaginary = scale(translatedImaginary, plotScale); 

        // if points are outside of plot region, discard them
        if (scaledReal >= plotDimensions || scaledImaginary >= plotDimensions || scaledReal < 0 || scaledImaginary < 0) {  // TODO I only have to do this because the escape threshold is set to 2, which results in escape sequences that go off the bounds of the image/plot after translation.  This wouldn't be an issue if the sequence bound were the same as the RNG bounds.  Changing this would also get rid of an expensive magnitude calculation.  Would the final rendering look different if I were to change this?  Try it!
            continue;
        }

        const sourceDensity = sourcePlot.plotPoint(scaledReal, scaledImaginary);

        // scale to canvas
        const x = scale(translatedReal, imageScale),
            y = scale(translatedImaginary, imageScale);

        // if points are outside of image region, discard them
        if (x >= imageWidth || y >= imageHeight || x < 0 || y < 0) { // TODO do I need this even with the check against the plot dimensions above?
            continue;
        }

        const imageDensity = imagePlot.plotPoint(x, y);

        if (imageDensity - 1 > sourceDensity) continue;

        const color = getColor(imageDensity, 255, imagePlot.highestDensity);
        drawer.setPixel(x, y, color, 0, 0, 255);
    }
};

const getDrawFunc = (drawer, sourcePlot, imagePlot, config) => {
	const imageWidth = config.imageWidth, 
		imageHeight = config.imageHeight,
        imageScale = config.imageScale,
        plotScale = config.plotScale,
        plotDimensions = config.plotDimensions,
        threads = config.threads,
        sequenceEscapeThreshold = config.sequenceEscapeThreshold,
        sequenceBound = config.sequenceBound,
        pointsToPlot = [],
        workers = [];
	let iteration = 0,
        iterationSetStartTime = null,
        renderStartTime = null;

    iterationSetStartTime = renderStartTime = new Date().getTime();

    for (let i = 0; i < threads; i++) {
        const worker = BuddhabrotWorker();
        worker.onmessage = (m) => {
            for (let i = 0; i < m.data.length; i++) pointsToPlot.push(m.data[i]);
        };
        worker.postMessage({
            sequenceEscapeThreshold,
            sequenceBound
        });

        workers.push(worker);
    }

	return function draw() {
        if (iteration === 0) rebaseColors(imagePlot, drawer, config);

		drawPoints(sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions);

        pointsToPlot.length = 0;  // clear the array

        iteration++;

        if (iteration % 10000 === 0) {
            rebaseColors(imagePlot, drawer, config);
            console.log(`iteration set ${iteration / 10000} finished in ${new Date().getTime() - iterationSetStartTime} milliseconds `
                         + `(total runtime ${new Date().getTime() - renderStartTime} milliseconds`);
            iterationSetStartTime = new Date().getTime();
        }

        if (iteration !== 0 && iteration % 10 === 0) drawer.updateCanvas();

        setTimeout(draw, 0);
	};
};

const drawBuddhabrot = (canvas, config) => {
	const drawer = CanvasDrawer({
		canvas,
		imageHeight: config.imageWidth,
		imageWidth: config.imageHeight
	});

    initCanvas(drawer, config);

	const sourcePlot = DensityPlot({
		width: config.plotDimensions,
		height: config.plotDimensions
	});

    const imagePlot = DensityPlot({
        width: config.imageWidth,
        height: config.imageHeight
    });

	getDrawFunc(drawer, sourcePlot, imagePlot, config)();
};

export default drawBuddhabrot;