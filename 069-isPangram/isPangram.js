function isPangram(string){
  const chars = [];
  
  for (let char of string) {
    if (chars.includes(char.toLowerCase())) {
      continue;
    } else if (char !== ' '){
      chars.push(char.toLowerCase())
    }
  }
  
  return chars.length >= 26
}