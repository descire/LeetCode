/**
 * 时间复杂度：O(n)
 * 
 * 空间复杂度：O(height)
 * 
 */
const maxDepth = root => {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}