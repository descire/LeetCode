/**
 * 深度优先遍历
 * 时间复杂度 O(nm)
 * 空间复杂度 O(nm)
 */
const updateBoard = function(board, click) {
  const [x, y] = click;
  if (board[x][y] === 'M') {
    board[x][y] = 'X';
  } else {
    dfs(board, x, y);
  }
  return board;
};

const directionX = [0, 1, 0, -1, 1, 1, -1, -1];
const directionY = [1, 0, -1, 0, 1, -1, 1, -1];

function dfs(board, x, y) {
  let count = 0;
  for (let i = 0; i < 8; i++) { 
    const tx = x + directionX[i];
    const ty = y + directionY[i];
    if (tx < 0 || ty < 0 || tx >= board.length || ty >= board[0].length) {
      // 边界情况
      continue;
    }
    if (board[tx][ty] === 'M') {
      count++;
    }
  }
  if (count > 0) {
    // 规则3
    board[x][y] = String(count);
  } else {
    board[x][y] = 'B';
    for (let i = 0; i < 8; i++) {
      const tx = x + directionX[i];
      const ty = y + directionY[i];
      if (tx < 0 || ty < 0 || tx >= board.length || ty >= board[0].length || board[tx][ty] !== 'E') {
        // 边界情况
        continue;
      }
      dfs(board, tx, ty);
    }
  }
}