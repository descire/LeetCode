/**
 * 前缀和
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var maxNonOverlapping = function(nums, target) {
  let record = new Set();
  record.add(0);
  let ans = 0;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (record.has(currentSum - target)) {
      ans++;
      record.clear();
      record.add(0);
      currentSum = 0;
    } else {
      record.add(currentSum);
    }
  }
  return ans;
};