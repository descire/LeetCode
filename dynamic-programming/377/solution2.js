/**
 * 
 * https://leetcode.com/problems/combination-sum-iv/
 * 
 * 377. Combination Sum IV
 * 
 * Medium
 * 
 */
const combinationSum4 = (nums, target) => {
  const max = nums.length

  const dp = new Array(target + 1).fill(0)

  dp[0] = 1

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < max; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[target]
}