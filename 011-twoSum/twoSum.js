const twoSum = function (nums, target) {
	for (let i = 0; i <= nums.length; i++) {
		for (let j = nums.length; j > 0; j--) {
			if (nums[i] + nums[j] === target) {
				return [nums.indexOf(nums[i]), nums.lastIndexOf(nums[j])];
			}
		}
	}
};


// more optimised solution

var twoSumOptimised = (nums, target) => {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numIndices) {
            return [i, numIndices[complement]];
        }
        numIndices[nums[i]] = i;
    }
}