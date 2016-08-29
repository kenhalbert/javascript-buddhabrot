import BuddhabrotGenerator from './math/BuddhabrotGenerator';

const fractalGenerator = BuddhabrotGenerator({
	sequenceEscapeThreshold: 10000,  // TODO replace with config value passed via postMessage
	sequenceBound: 2  // TODO replace with config value passed via postMessage
});