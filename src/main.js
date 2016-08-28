import drawBuddhabrot from './libs/jsbuddhabrot';


drawBuddhabrot(document.getElementById('canvas'), {
	imageWidth: 600,
	imageHeight: 600,
	imageScale: 200,
	plotScale: 200,  // TODO should this be calculated by the program every time?  pScale = Math.floor(pDim / 3) - easy
	plotDimensions: 600,
	sequenceEscapeThreshold: 10000,
	sequenceBound: 2
});