function reversed(s) {
  let result = "";
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }
  return result;
}

function shorterReverseLonger(a, b) {
  if (a.length === b.length || a.length > b.length) {
    return b + reversed(a) + b;
  }

  return a + reversed(b) + a;
}
