/**
 * 递归
 * 
 * 二叉树高度
 */
const isBalanced = function(root) {
  if (!root) {
    return true;
  }
  return (isBalanced(root.left) && isBalanced(root.right) && Math.abs(help(root.left) - help(root.right)) <= 1);
};

function help(root) {
  if (!root) {
    return 0;
  }
  return Math.max(help(root.left), help(root.right)) + 1;
}