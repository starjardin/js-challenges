function findUniq(arr) {
  const getSignature = (str) => {
    return [...new Set(str.toLowerCase())].sort().join("");
  };

  const signatureMap = new Map();

  for (const str of arr) {
    const sig = getSignature(str);
    if (!signatureMap.has(sig)) {
      signatureMap.set(sig, []);
    }
    signatureMap.get(sig).push(str);
  }

  for (const [sig, strings] of signatureMap) {
    if (strings.length === 1) {
      return strings[0];
    }
  }
}
