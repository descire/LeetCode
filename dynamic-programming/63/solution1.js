/**
 * https://leetcode.com/problems/unique-paths-ii/
 * 
 * 63. Unique Paths II
 * 
 * Medium
 */
const uniquePathsWithObstacles = obstacleGrid => {
  const x = obstacleGrid.length
  const y = obstacleGrid[0].length
  if (obstacleGrid[0][0] == 1) {
    return 0
  }
  const dp = []

  // 边界条件
  dp[0] = [1]

  // 初始化存储空间
  for (let i = 1; i < x; i++) {
    if (obstacleGrid[i][0] == 1) {
      dp[i] = [0]
    } else {
      dp[i] = [dp[i - 1][0]]
    }
  }
  
  for (let j = 1; j < y; j++) {
    if (obstacleGrid[0][j] == 1) {
      dp[0][j] = 0
    } else {
      dp[0][j] = dp[0][j - 1]
    }
  }

  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[i][j] = 0
        continue
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[x - 1][y - 1]
}