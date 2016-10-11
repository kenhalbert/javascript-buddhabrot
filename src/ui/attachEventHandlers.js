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
	})
};