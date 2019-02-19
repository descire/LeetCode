/**
 * https://leetcode.com/problems/unique-paths/
 * 
 * 62. Unique Paths
 * 
 * [Medium]
 * 
 * 
 * dfs TLE ！！！！
 * 
 * 记忆化处理
 */

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