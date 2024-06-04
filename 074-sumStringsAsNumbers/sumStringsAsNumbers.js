function sumStrings(num1, num2) {
	num1 = num1.split("").reverse().join("");
	num2 = num2.split("").reverse().join("");

	const maxLen = Math.max(num1.length, num2.length);
	let carry = 0;
	let result = [];

	for (let i = 0; i < maxLen; i++) {
		const digit1 = i < num1.length ? parseInt(num1[i], 10) : 0;
		const digit2 = i < num2.length ? parseInt(num2[i], 10) : 0;

		const digitSum = digit1 + digit2 + carry;

		const resultDigit = digitSum % 10;
		carry = Math.floor(digitSum / 10);

		result.push(resultDigit);
	}

	if (carry) {
		result.push(carry);
	}

	let finalResult = result.toReversed().join("");

	finalResult = finalResult.replace(/^0+/, "");

	return finalResult === "" ? "0" : finalResult;
}
