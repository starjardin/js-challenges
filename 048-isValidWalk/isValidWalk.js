function isValidWalk(walk) {
	if (walk.length !== 10) return false;
	const obj = {};
	for (const element of walk) {
		if (obj[element]) {
			obj[element] += 1;
		} else {
			obj[element] = 1;
		}
	}

	return obj["w"] === obj["e"] && obj["s"] === obj["n"];
}
