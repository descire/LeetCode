/**
 * https://leetcode-cn.com/problems/binary-tree-coloring-game/
 * 
 * 1145. 二叉树着色游戏
 * 
 * Medium
 * 
 * 68ms 97.14%
 * 34.1mb 100.00%
 */
const btreeGameWinningMove = (root, n, x) => {
  let max = 0;

  dfs(root);

  return max > n / 2;

  function dfs(root) {
    if (!root) {
      return 0;
    }
    const lCount = dfs(root.left);
    const rCount = dfs(root.right);

    if (root.val === x) {
      max = Math.max(lCount, rCount, n - lCount - rCount - 1);
    }

    return lCount + rCount + 1;
  }
}