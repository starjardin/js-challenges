function fill(arr, method = 0) {
  if (arr.length === 0 || arr.every((e) => e === undefined)) {
    return arr;
  }

  let result = [];

  if (method === 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        let backward = arr[i + 1];
        let forward = arr[i - 1];
        let forwardIndex = i - 1;
        let backwardIndex = i + 1;

        while (forward === undefined && backward === undefined) {
          forward = arr[forwardIndex];
          backward = arr[backwardIndex];
          backwardIndex++;
          forwardIndex--;
        }

        if (backward && forward) {
          result.push(forward < backward ? forward : backward);
        } else {
          result.push(backward ?? forward);
        }
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) {
      let index = method === -1 ? i + 1 : i - 1;
      let tempVal = arr[index];

      while (
        tempVal === undefined &&
        index > 0 &&
        tempVal === undefined &&
        index < arr.length - 1
      ) {
        index = method === -1 ? index + 1 : index - 1;
        tempVal = arr[index];
      }
      result.push(tempVal);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
