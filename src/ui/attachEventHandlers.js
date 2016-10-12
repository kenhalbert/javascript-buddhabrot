import stopwatch from './stopwatch';

const formatTime = (time) => {
	const rounded = Math.floor(time);

	return time < 1 
		? '00' 
		: time < 10 
			? '0' + rounded
			:  rounded;
};

const getRgbValue = (colorSection, type) => {
	return colorSection.find(`.${type} input`)[0].value;
};

const updateConfig = (drawer) => {
	const colorSection = $('.controls .colors');

	const color = {
		r: getRgbValue(colorSection, 'r'),
		g: getRgbValue(colorSection, 'g'),
		b: getRgbValue(colorSection, 'b'),
		a: 255
	};

	const threads = $('.controls .threads input')[0].value;

	drawer.reconfigure({
		threads,
		color
	});
}

export default (drawer) => {
	$(() => {
		const startButton = $('#start');

		startButton.click((e) => {
			const isRunning = drawer.isRunning;

			if (isRunning) drawer.stop();
			else {
				updateConfig(drawer)
				drawer.start();
			}

			const text = !isRunning
				? 'Stop'
				: 'Start';

			startButton.html(text);
		});

		stopwatch.onTick((time) => { 
			const seconds = time / 1000 % 60;
			const minutes = time / (1000 * 60) % 60;
			const hours = time / (1000 * 60 * 60);

			const secondsDisplay = formatTime(seconds);
			const minutesDisplay = formatTime(minutes);
			const hoursDisplay = formatTime(hours);  

			const timeDisplay = `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;

			$('.stats .runtime p').html(timeDisplay);
		});
	})
};