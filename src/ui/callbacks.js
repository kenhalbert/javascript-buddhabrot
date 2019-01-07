import { throttle } from '../libs/utils';
import stopwatch from './stopwatch';

export default {
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