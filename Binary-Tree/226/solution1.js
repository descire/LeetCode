/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const invertTree = (root) => {
  if (!root) {
    return null;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);

  invertTree(root.right);

  return root;
}