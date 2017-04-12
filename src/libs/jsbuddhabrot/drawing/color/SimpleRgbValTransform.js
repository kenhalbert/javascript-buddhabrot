const rgbValTransform = (rgbVal, density, highestDensity) => {
  return Math.floor(density * rgbVal / highestDensity);
};

export default (color) => {
  return (density, highestDensity) => {
    return {
      r: rgbValTransform(color.r, density, highestDensity),
      g: rgbValTransform(color.g, density, highestDensity),
      b: rgbValTransform(color.b, density, highestDensity),
      a: color.a
    };
  }
};