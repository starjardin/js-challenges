function calculateHypotenuse(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Parameter is not a number!");
	}

	if (Number.isNaN(a) || Number.isNaN(b)) {
		throw new Error("Parameter is not a number!");
	}

	if (a <= 0 || b <= 0) {
		throw new Error("Parameter is should be nonegative!");
	}

	const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

	return parseFloat(hypotenuse.toFixed(3));
}
