/**
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * 53. Maximum Subarray
 * 
 * Easy
 */
const maxSubArray = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }

  const dp = [nums[0]]
  if (max === 1) {
    return dp[0]
  }
  let ans = dp[0]

  for (let i = 1; i < max; i++) {
    const num = nums[i]
    dp[i] = Math.max(dp[i - 1] + num, num)
    ans = Math.max(ans, dp[i])
  }
  return ans
}