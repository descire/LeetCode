const inorderTraversal = root => {
  const ans = []
  inorder(root)
  return ans
  function inorder (root) {
    if (!root) {
      return
    }
    inorder(root.left)
    ans.push(root.val)
    inorder(root.right)
  }
}