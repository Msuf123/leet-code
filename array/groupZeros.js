var moveZeroes = function (nums) {
  let indexToUpdate = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[indexToUpdate] = nums[i];
      indexToUpdate++;
    }
  }
  while (indexToUpdate < nums.length) {
    nums[indexToUpdate] = 0;
    indexToUpdate++;
  }
  return nums;
};
//moves zeros to the end of array
