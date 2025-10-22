function landPerimeter(arr) {
  const result = "Total land perimeter: ";
  const joined = arr.join("");
  if (!joined.includes("X")) {
    return result + "0";
  }

  if (!joined.includes("O")) {
    return result + (arr.length + arr[0].length) * 2;
  }

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "X") {
        res += 4;
        if (i > 0 && arr[i - 1][j] === "X") {
            res -= 2;
        }
        if (j > 0 && arr[i][j - 1] === "X") {
            res -= 2;
        }
      }
    }
  }

  return result + res;
}
