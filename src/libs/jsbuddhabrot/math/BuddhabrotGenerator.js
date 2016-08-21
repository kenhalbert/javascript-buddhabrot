import MandelbrotSequence from './MandelbrotSequence';

const executeIteration = (initial, sequenceEscapeThreshold, sequenceBound) => {
	const result = [];

	const sequenceGenerator = MandelbrotSequence(initial);

	let i = 0, current = sequenceGenerator.next().value;  // first sequence member is always Complex.zero

	while(i < sequenceEscapeThreshold && current.magnitude < sequenceBound) {
		current = sequenceGenerator.next().value;
		i++;
		result.push(current);
	}

	return i < sequenceEscapeThreshold ? result : [];
};

export default function* (config) => {
	const current = config.getRandomNumberFromImageRegion();

	while (true) {
		yield executeIteration(current, config.sequenceEscapeThreshold, config.sequenceBound);
	}
};