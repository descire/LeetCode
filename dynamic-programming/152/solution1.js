/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * 
 * 152. Maximum Product Subarray
 * 
 * Medium
 * 
 * TLE
 */
const maxProduct = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  const dp = [1, nums[0]]
  let ans = nums[0]
  for (let i = 2; i <= max; i++) {
    let sum = nums[i - 1]
    dp[i] = Math.max(dp[i - 1] * sum, sum)
    for (let j = i - 1; j >= 1; j--) {
      sum *= nums[j - 1]
      dp[i] = Math.max(dp[j - 1] * sum, dp[i], sum)
      ans = Math.max(ans, dp[i])
    }
  }
  return ans
}