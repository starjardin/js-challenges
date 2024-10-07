function solve(s) {
  const vowels = ["o", "e", "a", "i", "u"];

  if (s.length === 0) {
    return 0;
  }

  let result = 0;

 for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      let count = 1;
      for (let j = i + 1; j < s.length; j++) {
        if (vowels.includes(s[j])) {
          count++;
        } else {
          break;
        }
      }
      if (count > result) {
        result = count;
      }
    }
 }
  return result;
}

console.log(solve("eoypiyoaul")) // 2