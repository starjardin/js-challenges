function countBy(x, n) {
	const result = [];

	for (let i = 1; i <= n; i++) {
		result.push(i * x);
	}

	return result;
}
