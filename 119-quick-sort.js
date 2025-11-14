function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([64, 34, 25, 12]));
console.log(quickSort([34, 64, 25, 12]));
console.log(quickSort([34, 25, 64, 12]));
console.log(quickSort([34, 25, 12, 64]));