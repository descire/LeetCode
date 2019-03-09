/**
 * https://leetcode.com/problems/triangle/
 * 
 * 120. Triangle
 * 
 * Medium
 */
const minimumTotal = triangle => {
  const max = triangle.length
  if (max === 0) {
    return 0
  }
  const dp = new Array(max)
  for (let i = max - 1; i >= 0; i--) {
    dp[i] = []
    const item = triangle[i]
    const len = item.length
    for (let j = 0; j < len; j++) {
      if (i === max - 1) {
        dp[i][j] = item[j]
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + item[j]
      }
    }
  }

  return dp[0][0]
}