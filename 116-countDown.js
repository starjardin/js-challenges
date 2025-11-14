function countDown(fromNumber) {
    if (fromNumber <= 0) {
        return 0;
    }

    return fromNumber + countDown(fromNumber - 1);
}

console.log(countDown(10)); // Output: 55 (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0)