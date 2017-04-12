import math from 'mathjs';

export default (c) => {
  let current =  math.complex(0, 0);

  return {
    next() {
      current = math.add(math.multiply(current, current), c);  // z(n + 1) = z(n)^2 + c
      return current;
    }
  };
};