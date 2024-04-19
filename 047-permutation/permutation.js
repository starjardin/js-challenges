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

  // for string '123'
  // arr becomes ['1', '2', '3']
  // for 
  // let curr = arr.slice();
	permute(string.split(""));
	return [...results];
}

permutations('abc')