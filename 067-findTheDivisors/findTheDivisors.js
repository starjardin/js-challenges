function divisors(integer) {
	let result = [];

	for (let i = 2; i < Math.floor(integer); i++) {
		if (integer % i == 0) {
			result.push(i);
		}
	}

	if (result.length === 0) {
		return `${integer} is prime`;
	}

	return result;
}
