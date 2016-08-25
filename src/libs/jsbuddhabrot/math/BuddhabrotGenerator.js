import MandelbrotSequence from './MandelbrotSequence';
import math from 'mathjs';

/* This function uses a heuristic method to determine if complexToTest is in the Mandelbrot set.  If
 it is, the function yields an array of all points the generated sequence passed through; if it isn't,
 the function returns an empty array. */
const executeIteration = (complexToTest, sequenceEscapeThreshold, sequenceBound) => {
	const result = [];

	const sequenceGenerator = MandelbrotSequence(complexToTest);

	let i = 0, current = math.complex(0, 0);

	while (i < sequenceEscapeThreshold && (Math.sqrt(Math.pow(current.re, 2) + Math.pow(current.im, 2))) < sequenceBound) {
		current = sequenceGenerator.next();
		i++;
		result.push(current);
	}

	return i < sequenceEscapeThreshold ? result : [];
};

const getRandomNumberFromPlaneRegion = () => math.complex(Math.random() * 3 - 2, Math.random() * 3 - 1.5);

export default (config) => {
	return {
		next() {
			return executeIteration(getRandomNumberFromPlaneRegion(), config.sequenceEscapeThreshold, config.sequenceBound)
		}
	};
};