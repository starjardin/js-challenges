function sumDigits(number) {
  const str = "" + Math.abs(number);
  let result = 0;
  for (let s of str) {
    result += Number(s);
  }

  return result;
}
