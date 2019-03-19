module.export = function(nums, k) {
	let swapLen = nums.length - (k % nums.length);
	swap(nums, 0, swapLen - 1);
	swap(nums, swapLen, nums.length - 1);
	swap(nums, 0, nums.length - 1);
	console.log('Hello World');
	return nums;
};

const swap = (arr, start, end) => {
	for (let i = start, j = end; i < j; i++, j--) {
		let temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
};
