// function isPrime(number) {
// 	if (number < 2) {
// 		return false;
// 	}

// 	for (let i = 2; i <= Math.sqrt(number); i++) {
// 		if (number % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

function isPrimeOptimized(number) {
	if (number < 2) {
		return false;
	}

	if (number === 2 || number === 3) {
		return true;
	}

	if (number % 2 === 0 || number % 3 === 0) {
		return false;
	}

	for (let i = 5; i * i <= number; i += 6) {
		if (number % i === 0 || number % (i + 2) === 0) {
			return false;
		}
	}

	return true;
}

console.log(isPrimeOptimized(67));

// function total(arr) {
// 	return arr.filter((v) => isPrime(arr.indexOf(v))).reduce((a, b) => a + b, 0);
// }

// const arr = [1, 2, 3, 4];

// console.log(total(arr));

// function factorial(n) {
// 	if (n === 0) {
// 		return 1;
// 	}
// 	return n * factorial(n - 1);
// }

// function factorial2(n) {
// 	if (n === 0) return 1;
// 	let result = 1;
// 	while (n > 0) {
// 		result = result * n;
// 		n = n - 1;
// 	}
// 	return result;
// }

// function factorial3(n) {
// 	if (n === 0) return 1;

// 	let result = 1;

// 	for (let i = n; i > 0; i--) {
// 		result = i * result;
// 	}

// 	return result;
// }

// console.log(factorial2(4));
// console.log(factorial(4));
// console.log(factorial3(4));
// console.log(factorial(3));
// console.log(factorial2(3));
// console.log(factorial3(3));
// console.log(factorial(7));
// console.log(factorial2(7));
// console.log(factorial3(7));
// console.log(factorial(0));
// console.log(factorial2(0));
// console.log(factorial3(0));

// function isValid(string) {
// 	const stack = [];

// 	const mapping = {
// 		")": "(",
// 		"]": "[",
// 		"}": "{",
// 	};

// 	for (let i = 0; i < string.length; i++) {
// 		const char = string[i];

// 		if (char in mapping) {
// 			const topEl = stack.pop();

// 			if (char !== topEl) {
// 				return false;
// 			}
// 		} else {
// 			stack.push(char);
// 		}
// 	}
// 	return stack.length === 0;
// }

// const removeDuplicates = function (nums) {
// 	const k = {};

// 	// We will create a variable k (obect)to hold each occurence of an integer
// 	// We will loop through nums and check if the current num is in obj
// 	// if yes increase its value else add new property and assign a value of one

// 	// return keys of obj

// 	for (let i of nums) {
// 		if (k[i]) {
// 			k[i] = k[i] + 1;
// 		} else {
// 			k[i] = 1;
// 		}
// 	}

// 	const t = Object.keys(k);

// 	return t.map(e => Number(e));
// };

// console.log(removeDuplicates([1, 1, 2]));
