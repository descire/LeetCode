/**
 * https://leetcode.com/problems/max-area-of-island/
 * 
 * 
 * 695. Max Area of Island
 * 
 * Medium
 * 
 * 88ms 59.66%
 * 37mb 52.85%
 */
const maxAreaOfIsland = grid => {
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const item = grid[i][j]
      if (item === 0) {
        continue
      }
      ans = Math.max(bfs(grid, i, j), ans)
    }
  }
  return ans
}

function bfs(grid, curRow, curCol) {
  if (!grid[curRow] || !grid[curRow][curCol] || grid[curRow][curCol] === 0) {
    return 0
  }
  let count = 1
  grid[curRow][curCol] = 0
  count += dfs(grid, curRow, curCol - 1) + dfs(grid, curRow, curCol + 1) + dfs(grid, curRow - 1, curCol) + dfs(grid, curRow + 1, curCol)
  return count
}