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

  if (k >= max / 2) {
    return help(prices, max)
  }

  let dp = []
  
  // 初始状态
  for (let i = 0; i <= max; i++) {
    dp[i] = 0
  }
  for (let i = 1; i <= k; i++) {
    let maxDiff = Number.MIN_SAFE_INTEGER
    let temp = [0, 0]
    for (let j = 2; j <= max; j++) {
      let max = temp[j - 1]

      maxDiff = Math.max(maxDiff, dp[j - 1] - prices[j - 2])

      max = Math.max(max, prices[j - 1] + maxDiff)

      temp[j] = max
    }
    dp = temp
  }
  return dp[max]

  function help (prices, max) {
    const hold = [-prices[0]]
    const sell = [0]

    for (let i = 1; i < max; i++) {
      sell[i] = Math.max(sell[i - 1], hold[i - 1] + prices[i])
      hold[i] = Math.max(hold[i - 1], sell[i - 1] - prices[i])
    }
    return sell[max - 1]
  }
}
