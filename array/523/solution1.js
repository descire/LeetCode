/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
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

  for (let i = 0; i < length + 1; i++) {
    for (let j = i + 2; j < length + 1; j++) {
      if ((preSum[j] - preSum[i]) % k === 0) {
        return true;
      }
    }
  }
  return false;
}