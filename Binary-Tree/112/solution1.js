/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(height)
 */
const hasPathSum = (root, sum) => {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === sum;
  }

  const reset = sum - root.val;
  const x = hasPathSum(root.left, reset);
  const y = hasPathSum(root.right, reset);
  return x || y;
}