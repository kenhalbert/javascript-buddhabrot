import CanvasDrawer from './CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';
import DensityPlot from './math/DensityPlot';

const getColor = (density, rgbVal, highestDensity) => {
    return Math.floor(density * rgbVal / highestDensity);
}

const rebaseColors = (plot, drawer) => {
    console.log('rebasing colors...');
	for (let h = 0; h < plot.width; h++) {
        for (let k = 0; k < plot.height; k++) {
            const red = getColor(plot.getDensity(h, k), 255, plot.highestDensity); // TODO make color configurable and allow to be changed after render
            drawer.setPixel(h, k, red, 0, 0, 255);  // TODO also consider allowing to save and load density plots, and inject coloring strategy to allow possibilities beyond monochrome
        }
    }
};

const getDrawFunc = (drawer, fractalGenerator, plot, config) => {
	const imageWidth = config.imageWidth, 
		imageHeight = config.imageHeight,
        scale = config.scale;
	let iteration = 0;

	return function draw() {
        if (iteration === 0) rebaseColors(plot, drawer);

		const pointsToPlot = fractalGenerator.next().value;

		for (let i = 0; i < pointsToPlot.length; i++) {  // TODO Why are 2 & -1.5 being added here?
            const x = Math.floor(scale * (pointsToPlot[i].real + 2)); // TODO what exactly is scale doing here?  And how did I pick a scale of 200?  It could be that's just what the example I saw used.
            const y = Math.floor(-scale * (pointsToPlot[i].imaginary - 1.5)); // TODO find a way to change scale dynamically from UI - the density plot & image dimensions/rendering should be decoupled.
            if (x >= imageWidth || x >= imageHeight || x < 0 || y < 0) {  // TODO also, the above should be scale * (pointsToPlot[i].imaginary + 1.5) - change it after everything is working
                continue;
            }

            const density = plot.plotPoint(x, y);

            const color = getColor(density, 255, plot.highestDensity);
            drawer.setPixel(x, y, color, 0, 0, 255);
        }

        iteration++;

        if (iteration !== 0 && iteration % 10 === 0) {
        	if (iteration % 10000 === 0) {
        		rebaseColors(plot, drawer);
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

	const fractalGenerator = BuddhabrotGenerator({
		sequenceEscapeThreshold: config.sequenceEscapeThreshold,
		sequenceBound: config.sequenceBound
	});

	const plot = DensityPlot({
		width: config.imageWidth,
		height: config.imageHeight
	});

	getDrawFunc(drawer, fractalGenerator, plot, config)();
};

export default drawBuddhabrot;