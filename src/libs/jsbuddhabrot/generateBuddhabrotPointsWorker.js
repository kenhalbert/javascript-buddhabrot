import BuddhabrotGenerator from './math/BuddhabrotGenerator';

onmessage = (m) => {
	const sequenceEscapeThreshold = m.data.sequenceEscapeThreshold,
		sequenceBound = m.data.sequenceBound;

	const fractalGenerator = BuddhabrotGenerator({
		sequenceEscapeThreshold,
		sequenceBound
	});

	while (true) postMessage(fractalGenerator.next());
};