import BuddhabrotDrawer from './drawing/BuddhabrotDrawer';
import CanvasDrawer from './drawing/CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';
import simpleRgbValTransform from './drawing/color/simpleRgbValTransform';

export default (canvas, config) => {
	const canvasDrawer = CanvasDrawer({
		canvas,
		imageHeight: config.imageWidth,
		imageWidth: config.imageHeight
	});

	return BuddhabrotDrawer(canvasDrawer, simpleRgbValTransform, config);
};