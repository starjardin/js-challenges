function longestConsec(strarr, k) {
  const n = strarr.length;

  if (k <= 0 || n === 0 || k > n) {
    return "";
  }

  let longestString = "";

  strarr.forEach((e, i) => {
    let currentString = strarr.slice(i, i + k).join("");

    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  });

  return longestString;
}
