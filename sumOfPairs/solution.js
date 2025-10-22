function sumPairs(ints, s) {
  const map = new Map();

  for (let i = 0; i < ints.length; i++) {
    const complement = s - ints[i];

    if (map.has(complement)) {
      return [map.get(complement), ints[i]];
    }
    map.set(ints[i], ints[i]);
  }
}
