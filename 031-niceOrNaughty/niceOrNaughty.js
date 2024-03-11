const naughtyOrNice = (data) => {
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

/**
 * 
 * Intuition
 * This function will help Santa figure out who's been naughty or nice. We need to retrieve naughty or nice.
 * 
 * Approach
 * 
 * 1. Our data structure is a nested objects like the following
 * {
			month: {
				// Following is the number of days in each month
				1: behavior
			}
 * }

	2. We need to find a way to get to the behavior of each day. We will do that 
	by looping through the objects using `for in loop`
	Firstly we need to create two variables to keep track of nice or naughty
	Second, we need to loop through the objects to get access to each month then another
	loop through the months to get access to each day.
	Then if a day is nice add one to the nice variable we created earlier and if a day is
	naughty add one to naughty variable.
	3. Finally, compare the two variables and nice if nice is greater or equal to naughty and
	else return naughty
 */

// Solution not mine but I like
// I like it because it only uses one variable to keep track of nice and can
// the job. 
const naughtyOrNice2 = (data) => {
	let nice = 0;

	for (let k in data) {
		for (let l in data[k]) {
			if (data[k][l] === "Nice") {
				nice += 1;
			} else if (data[k][l]) {
				nice -= 1;
			}
		}
	}

	return nice >= 0 ? "Nice!" : "Naughty!";
}

// Source: https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/train/javascript