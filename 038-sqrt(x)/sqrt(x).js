/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
	if (x <= 1) return x;

	let left = 0;
	let right = Math.floor(x / 2); // start from  the middle of x

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		const midSquared = mid * mid;

		if (midSquared === x) {
			return mid;
		} else if (midSquared < x) {
			left += 1;
		} else {
			right -= 1;
		}
	}

	return right;
};
