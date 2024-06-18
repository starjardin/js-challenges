function factorial(n) {
	if (n > 12 || n < 0) {
		throw new Error("RangeError");
	}

	if (n == 0) return 1;

	let result = 1;

	while (n > 0) {
		result *= n;
		n--;
	}

	return result;
}
