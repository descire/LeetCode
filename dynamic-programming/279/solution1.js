/**
 * https://leetcode.com/problems/perfect-squares/
 * 
 * 279. Perfect Squares
 * 
 * Medium
 */
const numSquares = n => {
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    const s = Math.floor(Math.sqrt(i))
    for (let j = i - 1; j >= Math.floor(i / 2); j--) {
      if (Math.pow(s, 2) === i) {
        dp[i] = 1
      }
      dp[i] = Math.min(dp[j] + dp[i - j], dp[i])
    }
  }
  return dp[n]
}