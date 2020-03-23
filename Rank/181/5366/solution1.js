/**
 * https://leetcode-cn.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 * 
 * 1391. 检查网格中是否存在有效路径
 * 
 * Medium
 */
const direactions = [[-1, 0], [0, 1], [1, 0], [0, -1]] // 上 右 下 左
const set = [
  [2, 3, 4],
  [1, 3, 5],
  [2, 5, 6],
  [1, 4, 6],
]

const hasDir = [[1, 3], [0, 2], [2, 3], [1, 2], [0, 3], [0, 1]]
const hasValidPath = grid => {
  return dfs(grid, 0, 0);
}


function dfs(grid, i, j) {
  const rows = grid.length;
  const cols = grid[0].length;
  if (i === rows - 1 && j === cols - 1) {
    return true;
  }
  // 标记当前节点已经访问过
  const item = grid[i][j];
  grid[i][j] = 0;

  const dir = hasDir[item - 1];
  for (let k = 0; k < 2; k++) {
    const d = dir[k];
    const newX = direactions[d][0] + i;
    const newY = direactions[d][1] + j;
    if (newX >= rows || newX < 0 || newY >= cols || newY < 0 || grid[newX][newY] === 0) {
      // 找其他的路
      continue;
    }
    if (grid[newX][newY] === set[d][0] || grid[newX][newY] === set[d][1] || grid[newX][newY] === set[d][2]) {
      if (dfs(grid, newX, newY)) {
        return true;
      }
    }
  }

  return false;
}