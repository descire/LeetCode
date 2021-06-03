const twoSum = (nums, target) => {
  const record = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (record.has(nums[i])) {
      const preIndex = record.get(nums[i]);
      return [preIndex, i];
    } else {
      record.set(target - nums[i], i);
    }
  }
}