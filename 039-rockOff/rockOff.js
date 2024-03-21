function awardingPoints(alicePoints, bobPoints) {
	let aliceScore = 0;
	let bobScore = 0;

	for (let i = 0; i < bobPoints.length; i++) {
		if (alicePoints[i] > bobPoints[i]) {
			aliceScore += 1;
		} else if (alicePoints[i] < bobPoints[i]) {
			bobScore += 1;
		}
	}

	if (aliceScore === bobScore) {
		return `${aliceScore}, ${bobScore}: that looks like a "draw"! Rock on!`;
	}

	if (aliceScore > bobScore) {
		return `${aliceScore}, ${bobScore}: Alice made "Kurt" proud!`;
	}

	if (aliceScore < bobScore) {
		return `${aliceScore}, ${bobScore}: Bob made "Jeff" proud!`;
	}
}

