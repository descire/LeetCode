/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const searchBST = (root, val) => {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}