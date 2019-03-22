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

  let dp = new Array(col + 1).fill(0)
  const temp = new Array(col + 1)

  for (let i = 1; i <= row; i++) {
    temp.fill(0)
    for (let j = 1; j <= col; j++) {
      if (matrix[i - 1][j - 1] == '1') {
        temp[j] = Math.min(temp[j - 1], dp[j], dp[j - 1]) + 1
        ans = Math.max(ans, temp[j])
      }
    }
    dp = temp.map(item => item)
  }

  return ans * ans
}