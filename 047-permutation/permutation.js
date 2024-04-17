function permutations(string) {
	const results = new Set();

	function permute(arr, m = []) {
		if (arr.length === 0) {
			results.add(m.join(""));
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				permute(curr.slice(), m.concat(next));
			}
		}
	}

	permute(string.split(""));
	return [...results];
}
