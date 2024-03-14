const isPalindrome = function (x) {
	const y = x.toString().split("").reverse().join("");
	return y === x.toString();
};
