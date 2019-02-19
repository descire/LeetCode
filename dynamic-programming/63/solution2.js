/**
 * https://leetcode.com/problems/unique-paths-ii/
 * 
 * 63. Unique Paths II
 * 
 * Medium
 * 
 * 优化空间复杂度O(n) 时间复杂度O(n^2)
 */
const uniquePathsWithObstacles = obstacleGrid => {
  const x = obstacleGrid.length
  const y = obstacleGrid[0].length
  if (obstacleGrid[0][0] == 1) {
    return 0
  }
  const dp = [1]

  for (let j = 1; j < y; j++) {
    if (obstacleGrid[0][j] == 1) {
      dp[j] = 0
    } else {
      dp[j] = dp[j - 1]
    }
  }

  for (let i = 1; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[j] = 0
        continue
      }
      if (j !== 0) {
        dp[j] += dp[j - 1]
      }
    }
  }

  return dp[y - 1]
}