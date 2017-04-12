const scale = (initial, factor) => {
  return Math.floor(initial * factor);
};

const rescale = (initial, initialScale, newScale) => {
  return scale(initial / initialScale, newScale);
};

export {
  scale, 
  rescale
};