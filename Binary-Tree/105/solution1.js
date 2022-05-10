/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
const buildTree = (preorder, inorder) => {
  // 递归中止条件
  if (preorder.length === 0) {
    return null;
  }

  const rootElement = preorder[0];

  const root = new TreeNode(rootElement);

  const rootElementIndex = inorder.indexOf(rootElement);

  root.left = buildTree(preorder.slice(1, rootElementIndex + 1), inorder.slice(0, rootElementIndex));

  root.right = buildTree(preorder.slice(rootElementIndex + 1), inorder.slice(rootElementIndex + 1));

  return root;
}