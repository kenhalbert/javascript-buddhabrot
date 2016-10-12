import { scale } from '../scaling';

export default (sourcePlot, imagePlot, drawer, pointsToPlot, imageWidth, imageHeight, imageScale, plotScale, plotDimensions, getColor) => {
    for (let i = 0; i < pointsToPlot.length; i++) {

        // First, add 2 & 1.5 to the real and imaginary components (respectively) to ensure that all points are translated to the positive quadrant of the complex plane.
        const translatedReal = pointsToPlot[i].re + 2,
            translatedImaginary = pointsToPlot[i].im + 1.5;

        // Then, multiply the sum by a scale factor to fit the image to the density plot, and achieve the desired level of detail.
        // For example, if you want to plot the image on a 600x600 density plot, the scale should be 200 because the figure is plotted on a
        // 3x3 region of the complex plane.  s = d / 3, where s is the scale & d is the width/height of the square region being rendered into.
        const scaledReal = scale(translatedReal, plotScale),
            scaledImaginary = scale(translatedImaginary, plotScale); 

        // if points are outside of plot region, discard them
        if (scaledReal >= plotDimensions || scaledImaginary >= plotDimensions || scaledReal < 0 || scaledImaginary < 0) {  // TODO I only have to do this because the escape threshold is set to 2, which results in escape sequences that go off the bounds of the image/plot after translation.  This wouldn't be an issue if the sequence bound were the same as the RNG bounds.  Changing this would also get rid of an expensive magnitude calculation.  Would the final rendering look different if I were to change this?  Try it!
            continue;
        }

        const sourceDensity = sourcePlot.plotPoint(scaledReal, scaledImaginary);

        // scale to canvas
        const x = scale(translatedReal, imageScale),
            y = scale(translatedImaginary, imageScale);

        // if points are outside of image region, discard them
        if (x >= imageWidth || y >= imageHeight || x < 0 || y < 0) { // TODO do I need this even with the check against the plot dimensions above?
            continue;
        }

        const imageDensity = imagePlot.plotPoint(x, y);

        if (imageDensity - 1 > sourceDensity) continue;

        const color = getColor(imageDensity, imagePlot.highestDensity);
        drawer.setPixel(x, y, color.r, color.g, color.b, color.a);
    }
};