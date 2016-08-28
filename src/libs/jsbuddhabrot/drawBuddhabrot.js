import CanvasDrawer from './CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';
import DensityPlot from './math/DensityPlot';

const getColor = (density, rgbVal, highestDensity) => {
    return Math.floor(density * rgbVal / highestDensity);
};

const scale = (initial, factor) => {
    return Math.floor(initial * factor);
};

const rescale = (initial, initialScale, newScale) => {
    return scale(initial / initialScale, newScale);
};

const rebaseColors = (plot, drawer, config) => {  // TODO the scaling problem can be solved by keeping a second density plot representing the image itself in memory and checking if the density in the plot is greater than the new one to plot before calling setPixel
    const imageScale = config.imageScale,
        plotScale = config.plotScale;
    console.log('rebasing colors...');
	for (let h = 0; h < plot.width; h++) {  // rescale point: pImage = (pPlot / sPlot) * sImage
        for (let k = 0; k < plot.height; k++) {  // TODO may need to discard points that fall outside of image region here (absolutely will actually)
            const red = getColor(plot.getDensity(h, k), 255, plot.highestDensity); // TODO make color configurable and allow to be changed after render
            if(drawer.getPixel().r > red) continue;  // TODO determine if I really need this.  It adds several seconds of execution time to the rebase.  Maybe that's okay if computation occurs on worker threads?  Can I optimize it by getting rid of the object literal?
            drawer.setPixel(rescale(h, plotScale, imageScale), rescale(k, plotScale, imageScale), red, 0, 0, 255);  // TODO also consider allowing to save and load density plots, and inject coloring strategy to allow possibilities beyond monochrome
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

const getDrawFunc = (drawer, fractalGenerator, plot, config) => {
	const imageWidth = config.imageWidth, 
		imageHeight = config.imageHeight,
        imageScale = config.imageScale,
        plotScale = config.plotScale,
        plotDimensions = config.plotDimensions;
	let iteration = 0,
        iterationSetStartTime = null,
        renderStartTime = null;

     iterationSetStartTime = renderStartTime = new Date().getTime();

	return function draw() {
        if (iteration === 0) rebaseColors(plot, drawer, config);

		const pointsToPlot = fractalGenerator.next();

		for (let i = 0; i < pointsToPlot.length; i++) {
            // First, add 2 & 1.5 to the real and imaginary components (respectively) to ensure that all points are translated to the positive quadrant of the complex plane.
            // Then, multiply the sum by a scale factor to fit the image to a region on the canvas & achieve the desired level of detail.
            // For example, if you want an image centered in a 600x600 canvas, the scale should be 200 because the figure is plotted on a
            // 3x3 region of the complex plane.  s = d / 3, where s is the scale & d is the width/height of the square region being rendered into.

            const translatedReal = pointsToPlot[i].re + 2,
                translatedImaginary = pointsToPlot[i].im + 1.5;

            const scaledReal = scale(translatedReal, plotScale),
                scaledImaginary = scale(translatedImaginary, plotScale); 

            // if points are outside of image region, discard them
            if (scaledReal >= plotDimensions || scaledImaginary >= plotDimensions || scaledReal < 0 || scaledImaginary < 0) {  // TODO I only have to do this because the escape threshold is set to 2, which results in escape sequences that go off the bounds of the image/plot after translation.  This wouldn't be an issue if the sequence bound were the same as the RNG bounds.  Changing this would also get rid of an expensive magnitude calculation.  Would the final rendering look different if I were to change this?  Try it!
                continue;
            }

            const density = plot.plotPoint(scaledReal, scaledImaginary);

            const x = scale(translatedReal, imageScale),
                y = scale(translatedImaginary, imageScale);

            // if points are outside of image region, discard them
            if (x >= imageWidth || y >= imageHeight || x < 0 || y < 0) {
                continue;
            }

            const color = getColor(density, 255, plot.highestDensity);  // TODO if image & plot scales are different, image pixel colors can be overwritten.  Maybe set pixel only if color is higher?
            drawer.setPixel(x, y, color, 0, 0, 255);
        }

        iteration++;

        if (iteration !== 0 && iteration % 10 === 0) {
        	if (iteration % 10000 === 0) {
        		rebaseColors(plot, drawer, config);
                console.log(`iteration set ${iteration / 10000} finished in ${new Date().getTime() - iterationSetStartTime} milliseconds `
                             + `(total runtime ${new Date().getTime() - renderStartTime} milliseconds`);

                iterationSetStartTime = new Date().getTime();
        	}

        	drawer.updateCanvas();
        	setTimeout(draw, 0);
        } else {
        	draw();
        }
	};
};

const drawBuddhabrot = (canvas, config) => {
	const drawer = CanvasDrawer({
		canvas,
		imageHeight: config.imageWidth,
		imageWidth: config.imageHeight
	});

    initCanvas(drawer, config);

	const fractalGenerator = BuddhabrotGenerator({
		sequenceEscapeThreshold: config.sequenceEscapeThreshold,
		sequenceBound: config.sequenceBound
	});

	const sourcePlot = DensityPlot({
		width: config.plotDimensions,
		height: config.plotDimensions
	});

    const imagePlot = DensityPlot({
        width: config.imageWidth,
        height: config.imageHeight
    });

	getDrawFunc(drawer, fractalGenerator, sourcePlot, config)();
};

export default drawBuddhabrot;