/**
 * https://leetcode-cn.com/problems/available-captures-for-rook/
 * 
 * 999. 车的可用捕获量
 * 
 * Easy
 * 
 * 56ms 93.75%
 * 34mb 60.00%
 */
const numRookCaptures = board => {
  let ans = 0;
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 'R') {
        // 向上
        let upIndex = j;
        while (upIndex >= 0 && board[i][upIndex] !== 'B') {
          if (board[i][upIndex] === 'p') {
            ans++;
            break;
          }
          upIndex--;
        }

        // 向右
        let rightIndex = i;
        while (rightIndex < board[0].length && board[rightIndex][j] !== 'B') {
          if (board[rightIndex][j] === 'p') {
            ans++;
            break;
          }
          rightIndex++;
        }

        // 向下
        let downIndex = j;
        while (downIndex < board.length && board[i][downIndex] !== 'B') {
          if (board[i][downIndex] === 'p') {
            ans++;
            break;
          }
          downIndex++;
        }

        // 向左
        let leftIndex = j;
        while (leftIndex >= 0 && board[leftIndex][j] !== 'B') {
          if (board[leftIndex][j] === 'p') {
            ans++;
            break;
          }
          leftIndex--;
        }

        return ans;
      }
    }
  }
}