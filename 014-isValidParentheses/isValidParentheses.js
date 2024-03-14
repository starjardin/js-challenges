function isValid(string) {
	const stack = [];
	const mapping = {
		")": "(",
		"]": "[",
		"}": "{",
	};

	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		if (char in mapping) {
			const topEl = stack.pop();

			if (topEl !== mapping[char]) {
				return false;
			}
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
}
