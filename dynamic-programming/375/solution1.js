/**
 * https://leetcode.com/problems/guess-number-higher-or-lower-ii/
 * 
 * 375. Guess Number Higher or Lower II
 * 
 * Medium
 */
const getMoneyAmount = n => {
  const dp = new Array(n + 1)

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = []
    for (let j = i; j < n; j++) {
      if (i === j) {
        dp[i][j] = 0
      } else if (j - 1 === i) {
        dp[i][j] = i + 1
      } else if (j - 2 === i) {
        dp[i][j] = (i + j + 2) >> 1
      } else {
        // 以每个数字为中间点
        dp[i][j] = Number.MAX_SAFE_INTEGER
        for (let k = i + 1; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], Math.max(dp[i][k - 1], dp[k + 1][j]) + k + 1)
        }
      }
    }
  }
  return dp[0][n - 1]
}