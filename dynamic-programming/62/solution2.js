/**
 * https://leetcode.com/problems/unique-paths/
 * 
 * 62. Unique Paths
 * 
 * [Medium]
 * 
 * 
 * dp
 * 
 * 定义状态
 * 
 *  dp[i][j] 表示i行j列所产生的路径数
 * 
 * 边界状态
 * 
 *  由于机器人在任意一个格子只能向右或者向下移动，那么
 * 
 *  dp[i][0] = 1 dp[0][j] = 1
 * 
 * 状态转移方程
 * 
 *  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 * 
 */

const uniquePaths = (m, n) => {
  
  const dp = []

  for (let i = 0; i < n; i++) {
    dp[i] = []
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[n - 1][m - 1]
}