import createBuddhabrotDrawer from './libs/jsbuddhabrot';
import { attachEventHandlers } from './ui';
import { throttle } from './libs/utils';
import 'bootstrap-webpack';
import './styles.css';

let iterationCount = 0;
const updateIterationCount = throttle(() => {
	$('.stats .iterations p').html(iterationCount);
}, 1000);
const callbacks = {
	onIterationCompleted: () => {
		iterationCount++;
		updateIterationCount();
	},
	onHighestDensityChanged: (newHighestDensity) => {
		$('.stats .highest-density p').html(newHighestDensity);
	}
};

const drawer = createBuddhabrotDrawer(document.getElementById('canvas'), {
	imageWidth: 1800,
	imageHeight: 1800,
	imageScale: 600,
	plotScale: 600,  // TODO should this be calculated by the program every time?  pScale = Math.floor(pDim / 3) - easy
	plotDimensions: 1800,
	sequenceEscapeThreshold: 10000,
	sequenceBound: 2,
	threads: 8
}, callbacks);

drawer.init();

attachEventHandlers(drawer);

window.drawer = drawer;

// What I need to do next is create a simple, slick-looking interface that can be used to configure and control the render. 
// Angular is probably the best choice for that; it's easy to set up and get working.
// The app should work like this:
//		1.  Canvases can be scaled with CSS, so fit a square canvas onto the screen with CSS and use a constant canvas size for now
//				-- Make the body background color grey & give the canvas a nice box-shadow 
//		2.  For now, the plot dimensions should be constant & large enough to yield high detail on all common viewport sizes
//		3.  The app should present the user with an input for the number of threads with explanations and expected completion times for each, with a start button under that
//		4.  When the user clicks start, it should start and show a status bar next to or underneath the canvas with remaining viewport space depending on screen size