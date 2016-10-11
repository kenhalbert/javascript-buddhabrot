let time = 0, 
	startTime = null,
	stopTime = null,
	isStarted = false,
	onTickCallback = null;

const start = () => {
	startTime = new Date();
	isStarted = true;

	tick();
};

const tick = () => {
	setTimeout(() => { 
		if (onTickCallback) onTickCallback(getTime()); 
		if (isStarted) tick();
	}, 1000)
}

const stop = () => {
	isStarted = false;
	stopTime = new Date();
};	

const clear = () => {
	stopTime = null;
	startTime = null;
};

const getTime = () => {
	return (stopTime || new Date()) - startTime; 
};

const onTick = (func) => {
	onTickCallback = func;
};

export default {
	start,
	stop,
	getTime,
	onTick,
	clear
}