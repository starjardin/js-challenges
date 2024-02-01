console.log("it works");

// setTimeout(() => {
// 	console.log("after time out");
// }, 5000);

// fetch("https://meowfacts.herokuapp.com/")
// 	.then((data) => {
// 		console.log("data", data);
// 	})
// 	.catch((err) => {
// 		console.log("error");
// 	});

// console.log("End");

// const arr = [1, 2, 3, 4, 5, 6];

// function double(n, i) {
// 	return n * i;
// }

// console.log(arr.map(double));

// setTimeout(() => {
// 	console.log("Wait for 0ms to run");
// }, 0);

// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
// 	endDate = new Date().getTime();
// }

// console.log("after while");

// function x() {
// 	for (let i = 0; i <= 3; i++) {
// 		setTimeout(function () {
// 			console.log(i);
// 		}, 0);
// 	}
// }

// x();

// const arr = [2,1,4]

// function bubbleSort(arr) {

//   for (let i = 0; i < arr.length; i++) {
// 		// 2
// 		// 1
// 		// 4
// 		// goes three times
// 		console.log('iii', i);
//     for (let j = 0; j < arr.length - 1; j++) {
// 			console.log('jjj', j);

// 			// 3 - 0 - 1 = 2
// 			// 3 - 1 - 1 = 1
// 			// 3 - 2 - 1 = 0

//       if (arr[j] > arr[j + 1]) {

// 				// if arr[0] > arr[1]

//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr))

// how the reverse string works
//

const string = "Hello world!";

function reverseString(str) {
	let reversedString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedString += str[i];
	}
	return reversedString;
}

function reverseArray(str) {
	const revs = str.split(" ");
	let newstr = ''

	for (let i = revs.length - 1; i >= 0; i--) {
		newstr += revs[i]
	}
	return newstr;
}

console.log(reverseArray(string));
