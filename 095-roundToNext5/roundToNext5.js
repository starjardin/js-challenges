function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  }
  let reminder = n % 5;
  if (n > 0 && n % 5 !== 0) {
    return n - reminder + 5;
  }

  if (n % 5 !== -0) {
    return n + reminder * -1;
  }
}

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }
