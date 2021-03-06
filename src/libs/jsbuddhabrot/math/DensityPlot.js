const createDensityPlotArray = (height, width) => {
  const plot = new Array(width);

  for (let i = 0; i < width; i++) {
    const col = new Array(height);
    for (let j = 0; j < height; j++) {
      col[j] = 0;
    }
    plot[i] = col;
  }

  return plot;
};

const DensityPlot = (params) => {
  const width = params.width,
    height = params.height;

  const plot = createDensityPlotArray(height, width);

  let highestDensity = 0;

  const recomputeHighestDensity = (density) => {
    if (highestDensity < density) highestDensity = density;
  };

  return {
    get width () {
      return width;
    },
    get height () {
      return height;
    },
    get highestDensity () {
      return highestDensity;
    },
    plotPoint (x, y) {
      const newVal = plot[x][y] + 1;
      plot[x][y] = newVal;

      recomputeHighestDensity(newVal);

      return newVal;
    },
    getDensity(x, y) {
      return plot[x][y];
    }
  };
};

export default DensityPlot;