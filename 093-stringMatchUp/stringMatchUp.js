function stringMatchUp(a, b) {
  const frequency = new Map();

  for (const str of a) {
    frequency.set(str, (frequency.get(str) || 0) + 1);
  }

  return b.map((str) => frequency.get(str) || 0);
}
