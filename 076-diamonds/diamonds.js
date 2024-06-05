function diamond(n) {
	if (n % 2 === 0 || n < 0) {
		return null;
	}

	let result = "";
	const as = "*";
	const space = " ";

	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			result =
				result + space.repeat(Math.floor((n - i) / 2)) + as.repeat(i) + "\n";
		} else {
			continue;
		}
	}

	for (let i = n - 1; i > 0; i--) {
		if (i % 2 !== 0) {
			result =
				result + space.repeat(Math.floor((n - i) / 2)) + as.repeat(i) + "\n";
		} else {
			continue;
		}
	}

	return result;
}
