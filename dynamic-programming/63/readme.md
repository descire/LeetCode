# [63. Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)

### 一、解题思路

  &emsp;&emsp;这道题目与【62. Unique Paths】唯一的不同点，就是在格子上设置了“路障”，机器人是无法经过“路障”的。

  &emsp;&emsp;由此可见，当格子为“路障”时，dp[i][j] = 0，所以解法与【62. Unique Paths】本质上是一模一样的。

### 二、代码实现

```JavaScript
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
```