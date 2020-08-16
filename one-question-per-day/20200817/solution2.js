/**
 * 递归 （自顶向下）
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 *
 */
const isBalanced = function(root) {
  if (!root) {
    return true;
  }
  return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

// 求解二叉树的高度
function height(root) {
  if (!root) {
    return 0;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
}