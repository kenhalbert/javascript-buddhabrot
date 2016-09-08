import { getDrawFunc, isRunning, stop } from './drawRoutine';
import DensityPlot from '../../math/DensityPlot';
import rebaseColors from './rebaseColors';

export default (drawer, colorFunc, config) => {
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

	return {
		get isRunning () {
			return isRunning();
		},
		start () {
			if (!isInitialized) throw Error('Drawer has not been initialized; call init() before calling start()');

			if (isRunning()) throw Error('Draw routine has already started');

			if (!drawFunc) drawFunc = getDrawFunc(drawer, colorFunc, sourcePlot, imagePlot, internalConfig);

			drawFunc();
		},
		stop () {
			if (!isRunning()) throw Error('Drawer has not been started');

			stop();
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
		}
	};
};