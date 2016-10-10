import drawPoints from './drawPoints';
import rebaseColors from './rebaseColors';
import BuddhabrotWorker from 'worker?inline!../../generateBuddhabrotPointsWorker.js';

const controlVars = {
    shouldStop: false,
    isRunning: false
};

const workers = [];

const stop = () => {
    controlVars.shouldStop = true;

    let worker;
    while ((worker = workers.pop())) worker.terminate();
};

const isRunning = () => controlVars.isRunning;

const getDrawFunc = (drawer, colorFunc, sourcePlot, imagePlot, config) => {
	const imageWidth = config.imageWidth, 
		imageHeight = config.imageHeight,
        imageScale = config.imageScale,
        plotScale = config.plotScale,
        plotDimensions = config.plotDimensions,
        threads = config.threads,
        sequenceEscapeThreshold = config.sequenceEscapeThreshold,
        sequenceBound = config.sequenceBound,
        pointsToPlot = [];
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

	return () => {
        controlVars.isRunning = true;

		(function drawInternal() {
            if(controlVars.shouldStop) {
                controlVars.isRunning = controlVars.shouldStop = false;
                
                return;
            }

            if (iteration === 0) rebaseColors(colorFunc, imagePlot, drawer, config);

            drawPoints(sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions, colorFunc);

            pointsToPlot.length = 0;  // clear the array

            iteration++;

            if (iteration % 10000 === 0) {
                rebaseColors(colorFunc, imagePlot, drawer, config);
                console.log(`iteration set ${iteration / 10000} finished in ${new Date().getTime() - iterationSetStartTime} milliseconds `
                             + `(total runtime ${new Date().getTime() - renderStartTime} milliseconds`);
                iterationSetStartTime = new Date().getTime();
            }

            if (iteration !== 0 && iteration % 10 === 0) drawer.updateCanvas();

            setTimeout(drawInternal, 0);  // use setTimeout to avoid SO errors & allow worker callbacks to run
        })();
	};
};


export {
    stop,
    isRunning,
    getDrawFunc
};