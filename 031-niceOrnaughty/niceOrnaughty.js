function naughtyOrNice(data) {
	let naughty = 0;
	let nice = 0;

	for (let k in data) {
		for (let l in data[k]) {
			if (data[k][l] === "Nice") {
				nice += 1;
			} else if (data[k][l]) {
				naughty += 1;
			}
		}
	}

	return nice >= naughty ? "Nice!" : "Naughty!";
}
