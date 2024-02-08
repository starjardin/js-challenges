function catMouse(x) {
	const catPosition = x.indexOf("C");
	const mousePosition = x.indexOf("m");
	if (mousePosition - 1 - catPosition <= 3) {
		return "Caught!";
	}
	return "Escaped!";
}

console.log(catMouse("C....m")); // Escaped!
console.log(catMouse("C...m")); // Caught!
console.log(catMouse("C......m")); // Escaped!
console.log(catMouse("C.m")); // Caught!
