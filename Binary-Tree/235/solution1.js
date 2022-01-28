/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
    return null;
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}