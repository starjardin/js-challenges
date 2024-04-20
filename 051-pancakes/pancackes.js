function cookPancakes(n, m) {
	const time = Math.ceil((n * 2) / m);
	return time === 1 ? 2 : time;
}
