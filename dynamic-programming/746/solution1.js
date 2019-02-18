/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * 
 * 746. Min Cost Climbing Stairs
 * 
 * Easy
 */
const minCostClimbingStairs = cost => {
  const max = cost.length
  if (max < 2) {
    return 0
  }

  const dp = [0, cost[0]]

  for (let i = 1; i < max; i++) {
    dp[i + 1] = Math.min(dp[i], dp[i - 1]) + cost[i]
  }
  return Math.min(dp[max], dp[max - 1])
}