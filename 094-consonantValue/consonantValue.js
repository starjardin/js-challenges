function solve(s) {
    const cons = s.replace(/[aeiou]/g, ' ')
    
    const n = cons.split(' ').map(e => {
      return stringValue(e);
    })
    
    return Math.max(...n)
  };
  
  function stringValue(string) {
    let valueSum = 0;
  
    for (let i = 0; i < string.length; i++) {
      valueSum += string.charCodeAt(i) - 96;
    }
    return valueSum;
  }