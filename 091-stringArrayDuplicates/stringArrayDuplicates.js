function removeAllConsecutiveDuplicates(arr) {
  return arr.map((str) => removeConsecutiveDuplicates(str));
}

function removeConsecutiveDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i];
    }
  }

  return result;
}

console.log(
  removeAllConsecutiveDuplicates([
    "ccooddddddewwwaaaaarrrrss",
    "piccanin",
    "hubbubbubboo",
  ])
); // ["codewars", "picanin", "hubububo"]
