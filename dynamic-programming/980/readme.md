# [980. Unique Paths III](https://leetcode.com/problems/unique-paths-iii/)

### 一、解题思路

  &emsp;&emsp;题目要求求出从起点到终点的路径数，并且该路径包含所有可以移动的格子。

  &emsp;&emsp;也就是说，对于每一个格子的下一步移动有四个方向的选择，最容易想到的处理方法就是采用DFS搜索方法。

  &emsp;&emsp;在进行DFS之前，需要遍历整个网格，记录起点坐标以及可以移动的格子数量，从而决定搜索的深度。

  &emsp;&emsp;理论上其空间复杂度为O(4^mn)，空间复杂度为O(mn)，但是由于题目本身网格大小的限制，最终运行时间非常理想。


### 二、代码实现

```JavaScript
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
```