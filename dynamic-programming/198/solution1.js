/**
 * https://leetcode.com/problems/house-robber/
 * 
 * 198. House Robber
 * 
 * dp[i] 表示第i个房屋可以抢劫的最大金额
 * 
 * dp[0] = 0
 * dp[1] = nums[0]
 * 
 * dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
 */

const rob = nums => {
  const max = nums.length
  if (!max) {
    return 0
  }
  
  const dp = new Array(max + 1).fill(0)

  dp[1] = nums[0]

  for (let i = 1; i < max; i++) {
    const money = nums[i]
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + money)
  }
  return dp[max]
}