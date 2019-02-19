# [62. Unique Paths](https://leetcode.com/problems/unique-paths/)

### 一、解题思路

  &emsp;&emsp;题目要求求出机器人从左上角向下或者向右移动，最终到达右下角终点不同路径数。

  &emsp;&emsp;最简单的思路就是采用DFS去统计最终能走到终点的路径，代码如下：

```JavaScript
const uniquePaths = (m, n) => {
  
  const grid = []

  const cache = {}

  for (let i = 0; i < n; i++) {
    grid[i] = []
    for (let j = 0; j < m; j++) {
      grid[i][j] = 0
    }
  }

  return dfs(grid, 0, 0)

  function dfs (grid, x, y) {
    if (cache[`${x}-${y}`]) {
      return cache[`${x}-${y}`]
    }
    if (x < 0 || x === n || y < 0 || y === m || grid[x][y] === -1) {
      cache[`${x}-${y}`] = 0
      return 0
    }
    if (x === n - 1 && y === m - 1) {
      cache[`${x}-${y}`] = 1
      return 1
    }

    grid[x][y] = -1
    const paths = dfs(grid, x, y + 1) + dfs(grid, x + 1, y)
    cache[`${x}-${y}`] = paths
    grid[x][y] = 0

    return paths
  }
}
```

  &emsp;&emsp;通常再采用DFS处理问题时，可能会出现大量重复子问题，从而影响算法的整体效率，所以记忆化处理是常用的优化手段。

### 二、代码实现

```JavaScript
const uniquePaths = (m, n) => {

  const dp = []

  for (let i = 0; i < m; i++) {
    dp[i] = 1
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[m - 1]
}
```