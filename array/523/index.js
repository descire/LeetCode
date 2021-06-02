const checkSubarraySum = (nums, k) => {
  if (nums.length < 2) {
    return false;
  }
  let currentSum = 0;
  const record = new Map();
  record.set(currentSum, -1);

  for (let i = 0; i < nums.length; i++) {
    currentSum = (currentSum + nums[i]) % k;
    if (record.has(currentSum)) {
      const preIndex = record.get(currentSum);
      if (i - preIndex >= 2) {
        return true;
      }
    } else {
      record.set(currentSum, i);
    }
  }
  return false;
}