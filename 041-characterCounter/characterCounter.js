function validateWord(s){
  const test = s.toLowerCase().split('')
  
   const charCount = test.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  
  const charCountValues = Object.values(charCount);
  
  return charCountValues.every(e => e == charCountValues[0])
}