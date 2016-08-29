import BuddhabrotGenerator from './math/BuddhabrotGenerator';

onmessage = (m) => {
	const fractalGenerator = BuddhabrotGenerator({
		sequenceEscapeThreshold: 10000,  // TODO replace with config value passed via postMessage
		sequenceBound: 2  // TODO replace with config value passed via postMessage
	});

	while (true) postMessage(fractalGenerator.next());
};