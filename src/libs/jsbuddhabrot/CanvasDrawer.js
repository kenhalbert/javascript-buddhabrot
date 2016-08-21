export default (canvas, imageWidth, imageHeight) => {
	const canvasContext = canvas.getContext('2d');
	const canvasData = canvasContext.getImageData(0, 0, imageWidth, imageHeight);

	const setPixel = (x, y, r, g, b, a) => {
		const index = (x + y * imageWidth) * 4;

        canvasData.data[index] = r;
        canvasData.data[index + 1] = g;
        canvasData.data[index + 2] = b;
        canvasData.data[index + 3] = a;
	};

	const updateCanvas = () => {
		canvasContext.putImageData(canvasData, 0, 0);
	};

	return {
		setPixel,
		updateCanvas
	};
};