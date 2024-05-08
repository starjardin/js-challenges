function elipse(a, b) {
	const perimeter = Math.PI * ((3 / 2) * (a + b) - Math.sqrt(a * b));
	const area = a * b * Math.PI;
	return `Area: ${area.toFixed(1)}, perimeter: ${perimeter.toFixed(1)}`;
}
