/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
const checkSubarraySum = (nums, k) => {
  const length = nums.length;
  if (length < 2) {
    return false;
  }

  const preSum = Array(length + 1).fill(0);

  for (let i = 1; i <= length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }

  const record = new Set();

  for (let i = 2; i <= length; i++) {
    record.add(preSum[i - 2] % k);

    if (record.has(preSum[i] % k)) {
      return true;
    }
  }
  return false;
}