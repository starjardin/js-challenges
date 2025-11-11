function findMissingLetter(arr) {
    const startCharCode = arr[0].charCodeAt(0);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) === startCharCode + i) {
            continue;
        } else {
            return String.fromCharCode(startCharCode + i);
        }
    }

    return 'No missing letter found';
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // Output: 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // Output: 'P'
console.log(findMissingLetter(['m', 'n', 'o', 'p', 'r', 's'])); // Output: 'q'
console.log(findMissingLetter(['X', 'Y', 'Z'])); // Output: undefined (no missing letter)