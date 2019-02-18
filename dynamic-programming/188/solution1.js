/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
 * 
 * 188. Best Time to Buy and Sell Stock IV
 * 
 * Hard
 */
const maxProfit = (k, prices) => {
  const max = prices.length
  if (max < 2) {
    return 0
  }

  const dp = []
  
  // 初始状态
  for (let i = 0; i <= k; i++) {
    dp[i] = [0, 0]
    if (i === 0) {
      for (let j = 0; j <= max; j++) {
        dp[i][j] = 0
      }
    }
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 2; j <= max; j++) {
      let max = dp[i][j - 1]

      for (let n = 1; n < j; n++) {
        max = Math.max(max, prices[j - 1] - prices[n - 1] + dp[i - 1][n])
      }

      dp[i][j] = max
    }
  }

  return dp[k][max]
}