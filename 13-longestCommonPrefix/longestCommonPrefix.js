const longestCommonPrefix = function (strs) {
	if (!strs[0] || !strs.length) {
		return "";
	}

	let i = 0;
	while (strs[0][i] && strs.every((s) => s[i] === strs[0][i])) {
		i++;
	}

	return strs[0].substr(0, i);
};
