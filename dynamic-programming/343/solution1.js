/**
 * https://leetcode.com/problems/integer-break/
 * 
 * 343. Integer Break
 * 
 * Medium
 * 
 */
const integerBreak = n => {
  const dp = new Array(n + 1).fill(1)

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      if (i + j <= n) {
        const x = Math.max(dp[i], i)
        const y = Math.max(dp[j], j)

        dp[i + j] = Math.max(x * y, dp[i + j])
      }
    }
  }
  return dp[n]
}