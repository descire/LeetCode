/**
 * https://leetcode.com/problems/unique-paths-iii/
 * 
 * 980. Unique Paths III
 * 
 * 
 * 【 Hard 】
 * 
 */

// 对于图的问题 当然第一时间会想到DFS或者BFS搜索方法处理

const uniquePathsIII = grid => {

  let sx = -1
  let sy = -1
  let n = 1

  // 统计起始点坐标 可以移动的格子总数
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const item = grid[i][j]
      if (item == 0) {
        n++
      } else if (item == 1) {
        sx = i
        sy = j
      }
    }
  }

  return dfs(grid, sx, sy, n)

  function dfs (grid, x, y, n) {
    // 边界情况处理
    if (x < 0 || x == grid.length || y < 0 || y == grid[0].length || grid[x][y] == -1) {
      return 0
    }
    if (grid[x][y] == 2 && n !== 0) {
      return 0
    }
    // 满足要求的情况
    if (grid[x][y] == 2 && n === 0) {
      return 1
    }
    // 记录已经访问过的格子
    grid[x][y] = -1
    const paths = dfs(grid, x + 1, y, n - 1) + dfs(grid, x, y + 1, n - 1) + dfs(grid, x - 1, y, n - 1) + dfs(grid, x, y - 1, n - 1)
    // 还原状态
    grid[x][y] = 0

    return paths
  }
}