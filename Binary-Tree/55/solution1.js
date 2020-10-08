/**
 * 递归
 */
const isBalanced = function(root) {
  if (!root) {
    return true;
  }
  const leftTreeHeight = help(root.left);
  const rightTreeHeight = help(root.right);

  return isBalanced(root.left) && isBalanced(root.right) && (Math.abs(leftTreeHeight - rightTreeHeight) <= 1);
};

function help(root) {
  if (!root) {
    return 0;
  }
  const lh = help(root.left);
  const rh = help(root.right);

  return Math.max(lh + 1, rh + 1);
}