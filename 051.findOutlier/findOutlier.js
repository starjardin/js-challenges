function findOutlier(integers) {
	const obj = {
		even: 0,
		odd: 0,
	};

	for (let int of integers) {
		if (int % 2 == 0) {
			obj.even = obj.even + 1;
		} else {
			obj.odd = obj.odd + 1;
		}
	}

	if (obj.even !== 1) {
		return integers.find((e) => e % 2 !== 0);
	}
	return integers.find((e) => e % 2 === 0);
}
