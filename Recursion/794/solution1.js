/**
 * https://leetcode-cn.com/problems/valid-tic-tac-toe-state/
 * 
 * 794. 有效的井字游戏
 * 
 * Medium
 * 
 * 76ms 83.33%
 * 33.9mb 83.33%
 */

const validTicTacToe = board => {
  let xCount = 0;
  let oCount = 0

  board.forEach((sub) => {
    for (let i = 0; i < sub.length; i++) {
      const item = sub[i];
      if (item === 'O') {
        oCount++;
      } else if (item === 'X') {
        xCount++;
      }
    }
  })

  // 棋盘是否合法
  if (oCount > xCount || xCount - oCount > 1) {
    return false;
  }

  if (xCount - oCount === 1) {
    // 此时应该第二名选手落棋子，所以如果第二名选手已经获取胜利，那显然不合法。
    if (isAlreadyWin(board, 'O')) {
      return false;
    }
  }

  if (xCount === oCount) {
    // 此时应该第一名选手落棋子，如果第一名应该获取胜利，那显然不合法。
    if (isAlreadyWin(board, 'X')) {
      return false;
    }
  }
  // 其他情况都是合法的
  return true;
}


function isAlreadyWin(board, str) {

  for (let i = 0; i < 3; i++) {
    // 水平方向
    if (board[i][0] === str && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
    // 垂直方向
    if (board[0][i] === str && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }

  // 斜线方向
  if (board[0][0] === str && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return true;
  }
  if (board[0][2] === str && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
}
