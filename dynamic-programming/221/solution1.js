/**
 * https://leetcode.com/problems/maximal-square/
 * 
 * 221. Maximal Square
 * 
 * Medium
 */
const maximalSquare = matrix => {
  const row = matrix.length
  if (!row) {
    return 0
  }
  const col = matrix[0].length
  let ans = 0

  const dp = []
  dp[0] = new Array(col + 1).fill(0)

  for (let i = 1; i <= row; i++) {
    dp[i] = [0]
    for (let j = 1; j <= col; j++) {
      if (matrix[i - 1][j - 1] == '1') {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1
        ans = Math.max(ans, dp[i][j])
        continue
      }
      dp[i][j] = 0
    }
  }

  return ans * ans
}