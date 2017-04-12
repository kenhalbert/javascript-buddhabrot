let startTime = null,
  stopTime = null,
  elapsedTime = 0,
  isStarted = false,
  onTickCallback = null;

const getTimeSinceLastStart = () => new Date() - startTime;

const start = () => {
  if (isStarted) throw Error('stopwatch has already been started');

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
  if (!isStarted) throw Error('stopwatch has not been started');

  elapsedTime += getTimeSinceLastStart();
  isStarted = false;
};  

const clear = () => {
  startTime = null;
  elapsedTime = null;
};

const getTime = () => {
  let time;

  if (isStarted) time = elapsedTime 
    ? getTimeSinceLastStart() + elapsedTime 
    : getTimeSinceLastStart();
  else time = elapsedTime;

  return time; 
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
};