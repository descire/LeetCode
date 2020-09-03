/**
 * 
 * 时间复杂度 O(n!)
 */
const solveNQueens = function(n) {
  const ans = [];
  const grid = Array.from({ length: n }, () => Array(n).fill('.'));
  
  const cols = new Set();
  const line1 = new Set();
  const line2 = new Set();

  dfs(n, 0);

  return ans;

  function dfs(n, y) {
    if (y === n) {
      const temp = JSON.parse(JSON.stringify(grid));
      ans.push(temp.map(item => item.join('')));
      return;
    }
    for (let x = 0; x < n; x++) {
      if (!isValid(x, y, n)) {
        continue;
      }
      updateGrid(x, y, n, true);
      dfs(n, y + 1);
      updateGrid(x, y, n, false); // 状态重置
    }
  }

  function isValid(x, y, n) {
    return !cols.has(x) && !line1.has(x + y) && !line2.has(x - y + n - 1);
  }

  function updateGrid(x, y, n, is_put) {
    if (is_put) {
      cols.add(x);
      line1.add(x + y);
      line2.add(x - y + n - 1);
      grid[y][x] = 'Q';
    } else {
      cols.delete(x);
      line1.delete(x + y);
      line2.delete(x - y + n - 1);
      grid[y][x] = '.';
    }
  }
};