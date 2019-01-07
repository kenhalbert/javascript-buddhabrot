import BuddhabrotGenerator from './math/BuddhabrotGenerator';

onmessage = (m) => {
  const sequenceEscapeThreshold = m.data.sequenceEscapeThreshold,
    sequenceBound = m.data.sequenceBound;

  const fractalGenerator = BuddhabrotGenerator({
    sequenceEscapeThreshold,
    sequenceBound
  });

  let results = [];

  let iterations = 0;
  while (true) {
    results = results.concat(fractalGenerator.next());

    iterations++;

    if (iterations >= 1000) {  // TODO make this value configurable
      postMessage(results);

      results = [];

      iterations = 0;
    }
  }
};