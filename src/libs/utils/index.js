const debounce = (func, wait, immediate) => {
  let timeout;

  return function () {
    const context = this, 
      args = arguments;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

const throttle = (callback, limit) => {
  let wait = false;
  
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;

      setTimeout(() => {
        wait = false;
      }, limit);
    }
  }
};

export { debounce };
export { throttle };

export default { debounce, throttle };