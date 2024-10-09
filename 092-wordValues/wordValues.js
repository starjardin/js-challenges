function wordValues(a) {
  const values = [];

  for (let i = 0; i < a.length; i++) {
    values.push(stringValue(a.at(i).replace(/ /g, "")) * (i + 1));
  }
  return values;
}

function stringValue(string) {
  let valueSum = 0;

  for (let i = 0; i < string.length; i++) {
    valueSum += string.charCodeAt(i) - 96;
  }
  return valueSum;
}
