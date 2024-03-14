function reverseMiddle(array) {
  if (array.length % 2 === 0) {
    return array.slice((array.length / 2) - 1, (array.length / 2) + 1).reverse();
  }
	return array.slice(Math.floor((array.length / 2) - 1), Math.ceil((array.length / 2) + 1)).reverse();
}