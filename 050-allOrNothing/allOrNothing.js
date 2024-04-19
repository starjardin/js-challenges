function possiblyPerfect(keys, answers) {
	const result = [];

	for (let i = 0; i < answers.length; i++) {
		if (keys[i] !== "_" && keys[i] === answers[i]) {
			result.push(true);
		} else if (keys[i] !== "_" && keys[i] !== answers[i]) {
			result.push(false);
		}
	}

	return result.every((e) => e === true) || result.every((e) => e === false);
}
