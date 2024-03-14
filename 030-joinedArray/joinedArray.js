/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
// var join = function (arr1, arr2) {
// 	// We should return a merged array in the end
// 	// should not have objects with the same ID
// 	// if two objects have different IDs, boom easy peasy just add it to the new array
// 	// it two objects have same ID but different keys, keys should be merged
// 	// if two objects have same ID, same key, value from array2 overwrites value from array1

// 	// we will always have two arrays

// 	// Approach

// 	// iterate through array1, we will have access to every single object in the array
// 	// then iterate through array2 in the iteration of array1
// 	// we will have access to every single object in the array
// 	// check if id of object in array2 is present in array1
// 	// false: simply push the object to the merged array
// 	// True: May be possible to iterate through object keys and check which of them exists in object from array1
// 	// true: check their values
// 	// same: take value from array2
// 	// different: merge values

// 	// code

// 	let mergedArray = [...arr1];
// 	for (let item of arr1) {
// 		for (let item2 of arr2) {
// 			if (!(item2.id in item)) {
// 				mergedArray = [...arr1, item2];
// 			}

// 			for (let key in item2) {
// 				let obj = {};
// 				if (key in item) {
// 					if (item[key] === item2[key]) {
// 						item[key] = item2[key];
// 						mergedArray = [...mergedArray, item];
// 					}
// 				}

// 				obj = {
// 					id: item.id,
// 					...item,
// 					...item2,
// 				};

// 				mergedArray = [...mergedArray, obj];
// 			}
// 		}
// 	}

// 	return mergedArray;
// };


function mergeArrays(arr1, arr2) {
	const idSet = new Set();
	const mergedMap = new Map();

  // [[], []]
	[arr1, arr2].forEach((arr) => {
    // [obj]
		arr.forEach((obj) => {
      // id = obj.id,
			const id = obj.id;
			idSet.add(id);
      // id = id
			if (!mergedMap.has(id)) {
				mergedMap.set(id, { ...obj });
			} else {
				mergedMap.set(id, { ...mergedMap.get(id), ...obj });
			}
		});
	});

	const joinedArray = Array.from(mergedMap.values()).sort(
		(a, b) => a.id - b.id
	);

	return joinedArray;
}

const arr1 = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Alice" },
];
const arr2 = [
	{ id: 2, age: 30 },
	{ id: 3, name: "Bob", age: 25 },
];

const joinedArray = mergeArrays(arr1, arr2);
console.log(joinedArray);
