/**
 * https://leetcode-cn.com/problems/check-if-there-is-a-valid-path-in-a-grid/
 * 
 * 1391. 检查网格中是否存在有效路径
 * 
 * Medium
 * 
 * 112ms 100.00%
 * 50mb 100.00%
 */
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const hasValidPath = grid => {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue = [[0, 0]];

  while (queue.length !== 0) {
    const currentItem = queue.shift();
    const [x, y] = currentItem;
    if (x === rows - 1 && y === cols - 1) {
      return true;
    }
    
    // 四个方向 上 右 下 左
    for (let i = 0; i < 4; i++) {

      if (!canMove(i, Math.abs(grid[x][y]))) {
        // 不能进行这个方向的移动
        continue;
      }
      const x1 = x + dx[i];
      const y1 = y + dy[i];
      if (x1 < 0 || x1 >= rows || y1 < 0 || y1 >= cols) {
        // 超出边界
        continue;
      }

      if (grid[x1][y1] < 0) {
        // 已经访问过
        continue;
      }

      if (!isConnect(i, Math.abs(grid[x1][y1]))) {
        // 是否能联通
        continue
      }

      queue.push([x1, y1]);
      grid[x1][y1] = -grid[x1][y1];
    }
  }

  return false;
}

function canMove(direction, item) {
  if (direction === 0) {
    if (item === 2 || item === 5 || item === 6) {
      return true;
    }
    return false;
  }

  if (direction === 1) {
    if (item === 1 || item === 4 || item === 6) {
      return true;
    }
    return false;
  }

  if (direction === 2) {
    if (item === 2 || item === 3 || item === 4) {
      return true;
    }
    return false;
  }

  if (direction === 3) {
    if (item === 1 || item === 3 || item === 5) {
      return true;
    }
    return false;
  }
}

function isConnect(direction, item) {
  if (direction === 2) {
    if (item === 2 || item === 5 || item === 6) {
      return true;
    }
    return false;
  }

  if (direction === 3) {
    if (item === 1 || item === 4 || item === 6) {
      return true;
    }
    return false;
  }

  if (direction === 0) {
    if (item === 2 || item === 3 || item === 4) {
      return true;
    }
    return false;
  }

  if (direction === 1) {
    if (item === 1 || item === 3 || item === 5) {
      return true;
    }
    return false;
  }
}