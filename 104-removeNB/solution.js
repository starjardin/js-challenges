// I stole this code

function removeNb(n) {
  const sum = n * (n + 1) / 2;
  const total = sum + 1;
  const result = [];

  for (let a = 1; a <= n; a++) {
    const divisor = a + 1;
    if (total % divisor !== 0) continue;
    
    const b = total / divisor - 1;
    
    if (b >= 1 && b <= n && b !== a) {
      result.push([a, b]);
    }
  }

  return result;
}

removeNb(26);