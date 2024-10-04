function capitalize(s) {
  let cOdds = "";
  let cEven = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      cEven += s[i].toUpperCase();
      cOdds += s[i];
    } else {
      cOdds += s[i].toUpperCase();
      cEven += s[i];
    }
  }
  return [cEven, cOdds];
}
