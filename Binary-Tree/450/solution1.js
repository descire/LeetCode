/**
 * 时间复杂度：O(logn)
 * 空间复杂度：O(n)
 */
 const deleteNode = (root, key) => {
  if (!root) {
    return null;
  }

  const rootVal = root.val;
  if (rootVal > key) {
    root.left = deleteNode(root.left, key);
  } else if (rootVal < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left && root.right) {
      let min = root.right;
      while (min.left) {
        min = min.left;
      }
      root.val = min.val;
      root.right = deleteNode(root.right, min.val);
    } else {
      return root.left ? root.left : root.right;
    }
  }

  return root;
}