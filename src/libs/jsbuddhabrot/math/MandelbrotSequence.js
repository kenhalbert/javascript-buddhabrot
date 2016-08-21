import ComplexNumber from './ComplexNumber';

export default function* (c) {
	let current = ComplexNumber.zero;
	yield current;

	while (true) {
		current = ComplexNumber.add(ComplexNumber.pow(current, 2), c);  // z(n + 1) = z(n)^2 + c
		yield current;
	}
};