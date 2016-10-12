import BuddhabrotDrawer from './drawing/BuddhabrotDrawer';
import CanvasDrawer from './drawing/CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';
import SimpleRgbValTransform from './drawing/color/SimpleRgbValTransform';

const color = {
    r: 255,
    g: 0, 
    b: 0,
    a: 255
};

export default (canvas, config, callbacks) => {
	const canvasDrawer = CanvasDrawer({
		canvas,
		imageHeight: config.imageWidth,
		imageWidth: config.imageHeight
	});

	return BuddhabrotDrawer(canvasDrawer, SimpleRgbValTransform(color), config, callbacks);
};