/**
 * https://leetcode-cn.com/problems/binary-tree-coloring-game/
 * 
 * 1145. 二叉树着色游戏
 * 
 * Medium
 * 
 * 64ms 97.14%
 * 34.1mb 100.00%
 */
const btreeGameWinningMove = (root, n, x) => {
  let one = 0;
  let two = 0;
  let three = 0;
  dfs(root, 0);

  if (canWin(one, two + three + 1) || canWin(two, one + three + 1) || canWin(three, one + two + 1)) {
    return true;
  }
  return false;

  function dfs(root, flag) {
    if (!root) {
      return;
    }
    if (root.val === x) {
      dfs(root.left, 1);
      dfs(root.right, 2);
    } else {
      if (flag === 0) {
        one++;
      } else if (flag === 1) {
        two++;
      } else if (flag === 2) {
        three++;
      }
      dfs(root.left, flag);
      dfs(root.right, flag);
    }
  }
}

function canWin(y, x) {
  return y > x
}