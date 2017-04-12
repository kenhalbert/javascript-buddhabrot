export default (colorFunc, imagePlot, drawer) => {
  for (let h = 0; h < imagePlot.width; h++) {
    for (let k = 0; k < imagePlot.height; k++) {
      const density = imagePlot.getDensity(h, k);
      const color = colorFunc(density, imagePlot.highestDensity);
      drawer.setPixel(h, k, color.r, color.g, color.b, color.a);
    }
  }
};