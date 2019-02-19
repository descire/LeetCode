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

  &emsp;&emsp;第二种方法是采用动态规划的思想解决这道题目。

  &emsp;&emsp;定义状态：

```s
  dp[i][j]表示i行j列所产生的路径数
```

  &emsp;&emsp;因为机器人只能执行向下或者向右移动操作，所以边界状态为：

```s
  dp[i][0] = 1
  dp[0][j] = 1
```

  &emsp;&emsp;对于求解dp[i][j]，实际上就是求解到达它左边格子和上面格子所产生的路径和（**通常在思考动态规划的状态转移方程时，都会逆向思考**），那么状态转移方程为：

```s
  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
```

```JavaScript
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
```

  &emsp;&emsp;接下来，还可以将时间复杂度由O(n^2)优化为O(n)，主要由于状态转移方程中，当前状态主要取决于(i - 1)行和(j - 1)列，所以并不需要保存每一行的状态，最终代码如下：

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