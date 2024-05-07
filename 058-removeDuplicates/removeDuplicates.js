function solve(arr) {
  const result = [];
  
  for (let item of arr.reverse()) {
    if (!result.includes(item)) {
      result.push(item)
    }
  }
  
  return result.reverse()
}