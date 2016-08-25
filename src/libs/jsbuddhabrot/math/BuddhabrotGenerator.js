import MandelbrotSequence from './MandelbrotSequence';
import ComplexNumber from './ComplexNumber';

/* This function uses a heuristic method to determine if complexToTest is in the Mandelbrot set.  If
 it is, the function yields an array of all points the generated sequence passed through; if it isn't,
 the function returns an empty array. */
const executeIteration = (complexToTest, sequenceEscapeThreshold, sequenceBound) => {
	const result = [];

	const sequenceGenerator = MandelbrotSequence(complexToTest);

	let i = 0, current = sequenceGenerator.next().value;  // first sequence member is always Complex.zero

	while (i < sequenceEscapeThreshold && current.magnitude < sequenceBound) {
		current = sequenceGenerator.next().value;
		i++;
		result.push(current);
	}

	return i < sequenceEscapeThreshold ? result : [];
};

const getRandomNumberFromPlaneRegion = () => ComplexNumber(Math.random() * 3 - 2, Math.random() * 3 - 1.5);

export default function* (config) {
	while (true) {
		yield executeIteration(getRandomNumberFromPlaneRegion(), config.sequenceEscapeThreshold, config.sequenceBound);
	}
};