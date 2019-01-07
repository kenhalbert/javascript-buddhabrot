import drawPoints from './drawPoints';
import rebaseColors from './rebaseColors';
import BuddhabrotWorker from 'worker?inline!../../generateBuddhabrotPointsWorker.js';

const controlVars = {
  shouldStop: false,
  isRunning: false
};

const workers = [];

let callbacks = {};

const registerCallbacks = (newCallbacks) => {
  callbacks = newCallbacks;
};

const stop = () => {
  controlVars.shouldStop = true;

  let worker;
  while ((worker = workers.pop())) worker.terminate();
};

let lastHighestDensity = 0;

const isRunning = () => controlVars.isRunning;

const initWorkers = (threads, pointsToPlot, sequenceEscapeThreshold, sequenceBound) => {
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
    pointsToPlot = [];
    
  let iteration = 0,
    iterationSetStartTime = null,
    renderStartTime = null;

  return () => {
    controlVars.isRunning = true;

    initWorkers(threads, pointsToPlot, sequenceEscapeThreshold, sequenceBound);

    (function drawInternal() {
      if(controlVars.shouldStop) {
        controlVars.isRunning = controlVars.shouldStop = false;
        
        return;
      }

      drawPoints(sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions, colorFunc);

      pointsToPlot.length = 0;  // clear the array

      if (lastHighestDensity !== sourcePlot.highestDensity) {
        lastHighestDensity = sourcePlot.highestDensity;
        if (callbacks.onHighestDensityChanged) callbacks.onHighestDensityChanged(lastHighestDensity);
      }

      iteration++;

      if (iteration % 10000 === 0) rebaseColors(colorFunc, imagePlot, drawer);

      if (iteration !== 0 && iteration % 10 === 0) drawer.updateCanvas();

      setTimeout(drawInternal, 0);  // use setTimeout to avoid SO errors & allow worker callbacks to run
    })();
  };
};


export {
  stop,
  isRunning,
  getDrawFunc,
  registerCallbacks
};