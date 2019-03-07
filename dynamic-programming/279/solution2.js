/**
 * https://leetcode.com/problems/perfect-squares/
 * 
 * 279. Perfect Squares
 * 
 * Medium
 */
const numSquares = n => {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)

  for (let i = 1; i * i <= n; i++) {
    dp[i * i] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; i + j * j <= n; j++) {
      dp[i + j * j] = Math.min(dp[i] + 1, dp[i + j * j])
    }
  }

  return dp[n]
}