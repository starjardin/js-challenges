const removeDuplicates = function (nums) {
	if (nums.length === 0) {
		return 0;
	}

	let uniqueIndex = 0;

	// Iterate through the array
	for (let i = 1; i < nums.length; i++) {
		// If current element is different from previous unique element
    // if 1 !== 1
    // 1 !== 2
    // uniqueIndex = 1
    // nums[uniqueIndex] = nums[i]
    // if 2 !== 
		if (nums[i] !== nums[uniqueIndex]) {
			// Move the uniqueIndex pointer forward
			uniqueIndex++;
			// Update the unique element in nums
			nums[uniqueIndex] = nums[i];
		}
	}

	// Return the number of unique elements
	return uniqueIndex + 1;
};

console.log(removeDuplicates([1, 1, 2, 2, 3]));
