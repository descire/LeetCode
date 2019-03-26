/**
 * https://leetcode.com/problems/coin-change/
 * 
 * 322. Coin Change
 * 
 * Medium
 * 
 * bfs 超出内存
 * 
 * dp
 */
const coinChange = (coins, amount) => {
  const max = coins.length
  if (!max) {
    return -1
  }
  const dp = new Array(max + 1)
  dp[0] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0][0] = 0

  for (let i = 1; i <= max; i++) {
    dp[i] = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[i][0] = 0
    const coin = coins[i - 1]
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = Math.min(dp[i][j], dp[i][j - coin] + 1 || Number.MAX_SAFE_INTEGER, dp[i - 1][j])
    }
  }

  return (dp[max][amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[max][amount])
}