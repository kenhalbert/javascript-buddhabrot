import drawBuddhabrot from './libs/jsbuddhabrot';


drawBuddhabrot(document.getElementById('canvas'), {
	imageWidth: 600,
	imageHeight: 600,
	scale: 200,
	sequenceEscapeThreshold: 10000,
	sequenceBound: 2
});