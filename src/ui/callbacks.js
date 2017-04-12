import { throttle } from '../libs/utils';
import stopwatch from './stopwatch';

let iterationCount = 0;

const updateIterationCount = throttle(() => {
  $('.stats .iterations p').html(iterationCount);
  $('.stats .iterations-per-second p').html(Math.floor(iterationCount / (stopwatch.getTime()/1000)));
}, 1000);

export default {
  onIterationCompleted: () => {
    iterationCount++;
    updateIterationCount();
  },
  onHighestDensityChanged: (newHighestDensity) => {
    $('.stats .highest-density p').html(newHighestDensity);
  },
  onStop: () => {
    stopwatch.stop();
  },
  onStart: () => {
    stopwatch.start();
  },
  onInitCompleted: () => {
    $('.loading-message').addClass('hidden');
  }
};