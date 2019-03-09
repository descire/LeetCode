/**
 * https://leetcode.com/problems/ones-and-zeroes/
 * 
 * 474. Ones and Zeroes
 * 
 * Medium
 */
const findMaxForm = (strs, m, n) => {
  const max = strs.length

  const dp = new Array(max + 1)

  dp[0] = new Array(m + 1).fill(0).map(item => {
    return new Array(n + 1).fill(0)
  })

  for (let i = 1; i <= max; i++) {
    dp[i] = []
    // 统计字符串中的 1 和 0
    const [m1, n1] = getInfo(strs[i - 1])
    for (let j = 0; j <= m; j++) {
      dp[i][j] = []
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = Math.max(0, dp[i - 1][j][k])
        if (m1 <= j && n1 <= k) {
          dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - m1][k - n1] + 1)
        }
      }
    }
  }

  return dp[max][m][n]
}

function getInfo (str) {
  let m = 0
  let n = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      m++
    } else {
      n++
    }
  }
  return [m, n]
}