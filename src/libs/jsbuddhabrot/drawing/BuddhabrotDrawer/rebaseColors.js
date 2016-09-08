export default (colorFunc, imagePlot, drawer, imageScale) => {
    console.log('rebasing colors...');

    for (let h = 0; h < imagePlot.width; h++) {
        for (let k = 0; k < imagePlot.height; k++) {
            const density = imagePlot.getDensity(h, k);  // TODO colorFunc should take r, g, b values
            const red = colorFunc(density, 255, imagePlot.highestDensity); // TODO make color configurable and allow to be changed after render
            drawer.setPixel(h, k, red, 0, 0, 255);  // TODO also consider allowing to save and load density plots, and inject coloring strategy to allow possibilities beyond monochrome
        }
    }

    console.log('done rebasing colors');
};