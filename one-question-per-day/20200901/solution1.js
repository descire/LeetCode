/**
 * 递归
 * 
 * 时间复杂度 O(2^n)
 * 空间复杂度 O(n)
 */
const PredictTheWinner = function(nums) {
  return total(nums, 0, nums.length - 1) >= 0;
};

function total(nums, start, end) {
  if (start === end) {
    return nums[start]
  }
  const scoreStart = nums[start] - total(nums, start + 1, end);
  const scoreEnd = nums[end] - total(nums, start, end - 1);
  return Math.max(scoreStart, scoreEnd);
}