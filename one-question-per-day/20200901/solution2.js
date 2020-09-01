/**
 * 动态规划
 * 
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n^2)
 */
const PredictTheWinner = function(nums) {
  const len = nums.length;

  const dp = Array.from({ length: len }, () => Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    dp[i][i] = nums[i];
  }

  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }

  return dp[0][len - 1] >= 0;
};