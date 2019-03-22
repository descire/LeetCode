/**
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 * 
 * 983. Minimum Cost For Tickets
 * 
 * Medium
 * 
 * 
 */

const mincostTickets = (days, costs) => {
  const max = days.length
  if (!max) {
    return 0
  }

  const dp = [0]
  for (let i = 1; i <= max; i++) {
    dp[i] = Math.min(costs[0] + dp[i - 1], costs[1] + dp[i - 1], costs[2] + dp[i - 1])
    let dis = 0
    for (let j = i - 1; j >= 1; j--) {
      dis = days[i - 1] - days[j - 1]
      if (dis <= 6) {
        dp[i] = Math.min(dp[j - 1] + costs[1], dp[i])
      } else if (dis <= 29) {
        dp[i] = Math.min(dp[j - 1] + costs[2], dp[i])
      }
    }
  }
  return dp[max]
}