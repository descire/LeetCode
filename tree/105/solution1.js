const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) {
    return null
  }
  const rv = preorder.shift()
  const root = new TreeNode(rv)
  const index = inorder.indexOf(rv)

  root.left = buildTree(preorder.slice(0, index), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index), inorder.slice(index + 1))

  return root
}