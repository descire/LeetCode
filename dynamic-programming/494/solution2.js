/**
 * https://leetcode.com/problems/target-sum/
 * 
 * 494. Target Sum
 * 
 * Medium
 */
const findTargetSumWays = (nums, S) => {
  const max = nums.length

  const sum = nums.reduce((x, y) => x + y)

  // 特殊情况
  if (S > sum) {
    return 0
  }

  const dp = []
  dp[0] = new Array(sum * 2 + 1).fill(0) // 纯属为了打印出来好看^_^
  dp[0][sum] = 1

  for (let i = 1; i <= max; i++) {
    dp[i] = []
    for (let j = -sum; j <= sum; j++) {
      dp[i][j + sum] = (dp[i - 1][j - nums[i - 1] + sum] || 0) + (dp[i - 1][j + nums[i - 1] + sum] || 0)
    }
  }
  return dp[max][S + sum]
}