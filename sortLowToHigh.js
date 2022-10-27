function sortLowToHigh(nums) {
  return nums.sort((a, b) => a - b);
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));
