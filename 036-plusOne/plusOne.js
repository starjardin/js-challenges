/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
	let rest = 1;

	for (let i = digits.length - 1; i >= 0; i--) {
		const sum = digits[i] + rest;

		if (sum < 10) {
			digits[i] = sum;
      rest = 0;
      break;
		}

    if (sum >= 10) {
      digits[i] = 0;
    }
	}

  if (rest > 0) {
    digits.unshift(rest);
  }

  return digits
};

console.log(plusOne([9, 9, 9, 9, 9, 9, 9, 9, 9, 9]));
console.log(plusOne([1,2,3]));
