/**
 * https://leetcode-cn.com/problems/longest-zigzag-path-in-a-binary-tree/submissions/
 * 
 * 1372. 二叉树中的最长交错路径
 * 
 * Medium
 * 
 * 208ms 100.00%
 * 73mb 100.00%
 */

const longestZigZag = root => {
  if (!root) {
    return 0;
  }
  let ans = 0;

  help(root.left, true, 0);
  help(root.right, false, 0);

  return ans;

  function help(root, isLeft, height) {
    ans = Math.max(height, ans);
    if (!root) {
      return;
    }
    if (isLeft) {
      help(root.left, true, 0);
      help(root.right, false, 1 + height);
    } else {
      help(root.left, true, height + 1);
      help(root.right, false, 0);
    }
  }
}
