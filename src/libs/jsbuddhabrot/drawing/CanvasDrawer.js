export default (params) => {
	const canvas = params.canvas,
		imageWidth = params.imageWidth,
		imageHeight = params.imageHeight;

	const canvasContext = canvas.getContext('2d');
	const canvasData = canvasContext.getImageData(0, 0, imageWidth, imageHeight);

	const computeImageDataOffset = (x, y) => {
		return (y + x * imageHeight) * 4;
	};

	const setPixel = (x, y, r, g, b, a) => {
		const index = computeImageDataOffset(x, y);

        canvasData.data[index] = r;
        canvasData.data[index + 1] = g;
        canvasData.data[index + 2] = b;
        canvasData.data[index + 3] = a;
	};

	const updateCanvas = () => {
		canvasContext.putImageData(canvasData, 0, 0);
	};

	const getPixel = (x, y) => {
		const index = computeImageDataOffset(x, y);

		return {
			r: canvasData.data[index],
			g: canvasData.data[index + 1],
			b: canvasData.data[index + 2],
			a: canvasData.data[index + 3]
		};
	};

	return {
		setPixel,
		getPixel,
		updateCanvas
	};
};