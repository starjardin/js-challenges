const moveZeros = (arr) => {
	const arrCopy = [...arr];
	const zeros = arrCopy.filter((el) => el === 0);
	const arrWithoutZeros = arrCopy.filter((el) => el !== 0);
	return arrWithoutZeros.concat(zeros);
};
