// function findOdd(A) {
// 	return A.reduce((acc, cur) => {
// 		return acc ^ cur;
// 	}, 0);
// }

function findOdd(arr) {
  //TODO: This of error handling for some cases, maybe where no odds, no array for instance
	return arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))[0];
}

console.log(findOdd([1, 2, 1]));
