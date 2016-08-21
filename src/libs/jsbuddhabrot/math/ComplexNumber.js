const ComplexNumber = (real, imaginary) => {
	return {
		real, 
		imaginary,
		get magnitude() {
			return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
		}
	};
};

ComplexNumber.add = (first, second) => {
	return ComplexNumber(first.real + second.real, first.imaginary + second.imaginary);
};

ComplexNumber.multiply = (first, second) => {  
	// (a+bi)*(c+di) = (ac+adi+bci+bdii) = (ac-bd) + (ad+bc)i
	const real = (first.real * second.real - first.imaginary * second.imaginary);  
	const imaginary = (first.real * second.imaginary + first.imaginary * second.real);

	return ComplexNumber(real, imaginary);
};

ComplexNumber.pow = (complex, pow) => {
	let current = complex;
	for (let i = 0; i < pow; i++) {
		current = ComplexNumber.multiply(current, complex);
	}

	return current;
};

ComplexNumber.zero = ComplexNumber(0, 0);

export default ComplexNumber;