import BuddhabrotDrawer from './drawing/BuddhabrotDrawer';
import CanvasDrawer from './drawing/CanvasDrawer';
import BuddhabrotGenerator from './math/BuddhabrotGenerator';

export default (canvas, config, callbacks) => {
  const canvasDrawer = CanvasDrawer({
    canvas,
    imageHeight: config.imageWidth,
    imageWidth: config.imageHeight
  });

  return BuddhabrotDrawer(canvasDrawer, config, callbacks);
};