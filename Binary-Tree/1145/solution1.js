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

// 父节点方向
const PARENT_DIRECTION = 0;
// 左子树方向
const LEFT_DIRECTION = 1;
// 右子树方向
const RIGHT_DIRECTION = 2;

const btreeGameWinningMove = (root, n, x) => {
  let one = 0;
  let two = 0;
  let three = 0;
  dfs(root, PARENT_DIRECTION);

  if (canWin(one, two + three + 1) || canWin(two, one + three + 1) || canWin(three, one + two + 1)) {
    return true;
  }
  return false;

  function dfs(root, direction) {
    if (!root) {
      return;
    }
    if (root.val === x) {
      dfs(root.left, LEFT_DIRECTION);
      dfs(root.right, RIGHT_DIRECTION);
      return;
    }

    switch(direction) {
      case PARENT_DIRECTION:
        one++;
        break;
      case LEFT_DIRECTION:
        two++;
        break;
      case RIGHT_DIRECTION:
        three++;
        break;
    }
    dfs(root.left, direction);
    dfs(root.right, direction);
  }
}

function canWin(y, x) {
  return y > x
}