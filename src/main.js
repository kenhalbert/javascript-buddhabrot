import createBuddhabrotDrawer from './libs/jsbuddhabrot';
import { attachEventHandlers, callbacks } from './ui';
import 'bootstrap-webpack';
import './styles.css';

const drawer = createBuddhabrotDrawer(document.getElementById('canvas'), {
  imageWidth: 1800,
  imageHeight: 1800,
  imageScale: 600,
  plotScale: 600,  // TODO should this be calculated by the program every time?  pScale = Math.floor(pDim / 3) - easy
  plotDimensions: 1800,
  sequenceEscapeThreshold: 15000,
  sequenceBound: 2,
  threads: 8,
  color: {
    r: 255,
    g: 0, 
    b: 0,
    a: 255
  }
}, callbacks);

setTimeout(drawer.init, 0);

attachEventHandlers(drawer);