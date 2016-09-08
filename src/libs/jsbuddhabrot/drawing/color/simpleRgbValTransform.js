export default (density, rgbVal, highestDensity) => {
    return Math.floor(density * rgbVal / highestDensity);
};  // TODO colorFunc should take r, g, b values