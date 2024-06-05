function count(str) {
	return str.split("").reduce((acc, el) => {
		if (acc[el]) {
			acc[el] = acc[el] + 1;
		} else {
			acc[el] = 1;
		}
		return acc;
	}, {});
}
