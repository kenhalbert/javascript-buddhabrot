import stopwatch from './stopwatch';

const formatTime = (time) => {
	const rounded = Math.floor(time);

	return time < 1 
		? '00' 
		: time < 10 
			? '0' + rounded
			:  rounded;
};

export default (drawer) => {
	$(() => {
		const startButton = $('#start');

		startButton.click((e) => {
			const isRunning = drawer.isRunning;

			if (isRunning) drawer.stop();
			else drawer.start();

			const text = !isRunning
				? 'Stop'
				: 'Start';

			startButton.html(text);
		});

		stopwatch.onTick((time) => { console.log('tick', time); 
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