function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([64, 34, 25, 12]));
console.log(insertionSort([34, 64, 25, 12]));
console.log(insertionSort([34, 25, 64, 12]));
console.log(insertionSort([34, 25, 12, 64]));