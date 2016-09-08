import CanvasDrawer from './drawing/CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';
import DensityPlot from './math/DensityPlot';
import { scale } from './drawing/scaling';
import drawPoints from './drawing/drawPoints';
import simpleRgbValTransform from './drawing/color/simpleRgbValTransform';
import BuddhabrotWorker from 'worker?inline!./generateBuddhabrotPointsWorker.js';

const rebaseColors = (colorFunc, imagePlot, drawer, config) => {
    const imageScale = config.imageScale;

    console.log('rebasing colors...');
	for (let h = 0; h < imagePlot.width; h++) {
        for (let k = 0; k < imagePlot.height; k++) {
            const srcDensity = imagePlot.getDensity(h, k);
            const red = colorFunc(srcDensity, 255, imagePlot.highestDensity); // TODO make color configurable and allow to be changed after render
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

const getDrawFunc = (drawer, colorFunc, sourcePlot, imagePlot, config) => {
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
        if (iteration === 0) rebaseColors(simpleRgbValTransform, imagePlot, drawer, config);

		drawPoints(sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions, colorFunc);

        pointsToPlot.length = 0;  // clear the array

        iteration++;

        if (iteration % 10000 === 0) {
            rebaseColors(simpleRgbValTransform, imagePlot, drawer, config);
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

	getDrawFunc(drawer, simpleRgbValTransform, sourcePlot, imagePlot, config)();
};

export default drawBuddhabrot;