function possibleScores(answerOfTom, scoreOfTom, answerOfJohn) {
	let same = 0;
	for (let i = 0; i < answerOfTom.length; i++) {
		if (answerOfTom[i] === answerOfJohn[i]) {
			same += 10;
		}
	}

	const minScoreJohn = Math.abs(100 - scoreOfTom - same);
	const maxScoreJohn = 100 - Math.abs(scoreOfTom - same);
	return [minScoreJohn, maxScoreJohn];
}
