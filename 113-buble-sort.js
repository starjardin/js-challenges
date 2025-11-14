function bubleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubleSort([64, 34, 25, 12]));
console.log(bubleSort([34, 64, 25, 12]));
console.log(bubleSort([34, 25, 64, 12]));
console.log(bubleSort([34, 25, 12, 64]));


console.log(bubleSort([25, 34, 12, 64]));
console.log(bubleSort([25, 12, 34, 64]));
console.log(bubleSort([25, 12, 34, 64]));


console.log(bubleSort([12, 25, 34, 64]));
console.log(bubleSort([12, 25, 34, 64]));


console.log(bubleSort([12, 25, 34, 64]));

