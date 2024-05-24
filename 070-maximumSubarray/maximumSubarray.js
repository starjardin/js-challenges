const maxSequence = (arr) => {
	if (!arr.length) return 0;

	if (arr.every((e) => e < 0)) return 0;

	let max_current = arr[0];
	let max_global = arr[0];

	for (let i = 1; i < arr.length; i++) {
		max_current = Math.max(arr[i], max_current + arr[i]);
		max_global = Math.max(max_global, max_current);
	}
	return max_global;
};
