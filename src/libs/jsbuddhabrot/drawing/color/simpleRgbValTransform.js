export default (density, rgbVal, highestDensity) => {
    return Math.floor(density * rgbVal / highestDensity);
};