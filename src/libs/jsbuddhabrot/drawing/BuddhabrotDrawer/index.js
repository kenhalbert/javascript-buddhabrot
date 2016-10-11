import { getDrawFunc, isRunning, stop, registerCallbacks } from './drawRoutine';
import DensityPlot from '../../math/DensityPlot';
import rebaseColors from './rebaseColors';
import mutableConfig from './mutableConfig';

export default (drawer, colorFunc, config, callbacks) => {
	const internalConfig = Object.assign({}, config),
		createSourcePlot = () => DensityPlot({
			width: internalConfig.plotDimensions,
			height: internalConfig.plotDimensions
		}),
		createImagePlot = () => DensityPlot({
	        width: internalConfig.imageWidth,
	        height: internalConfig.imageHeight
	    }),
	    initCanvasAndPlots = () => {
	    	sourcePlot = createSourcePlot();
			imagePlot = createImagePlot();

			rebaseColors(colorFunc, imagePlot, drawer, internalConfig.imageScale); 

			drawer.updateCanvas();
	    };

	let drawFunc = null,
		sourcePlot = null,
		imagePlot = null,
		isInitialized = false;

	registerCallbacks(callbacks);

	return {
		get isRunning () {
			return isRunning();
		},
		start () {
			if (!isInitialized) throw Error('Drawer has not been initialized; call init() before calling start()');

			if (isRunning()) throw Error('Draw routine has already started');

			if (callbacks.onStart) callbacks.onStart();

			if (!drawFunc) drawFunc = getDrawFunc(drawer, colorFunc, sourcePlot, imagePlot, internalConfig);

			drawFunc();
		},
		stop () {
			if (!isRunning()) throw Error('Drawer has not been started');

			stop();

			if (callbacks.onStop) callbacks.onStop();
		},
		clear () {
			if (isRunning()) throw Error('Cannot clear canvas while draw routine is running');

			drawFunc = null;

			initCanvasAndPlots();
		},
		init () { 
			if (isInitialized) throw Error('Drawer has already been initialized');
			
			initCanvasAndPlots();

			isInitialized = true;
		},
		reconfigure (config) {
			if (isRunning()) throw Error('Draw routine must be stopped before it can be reconfigured');

			for (let key in config) {
				if (!config.hasOwnProperty(key)) continue;

				if (!mutableConfig[key]) throw Error(`Configuration setting ${key} is not mutable`);

				internalConfig[key] = config[key];
			}

			drawFunc = null;
		}
	};
};