const preorderTraversal = root => {
  const ans = []
  preOrder(root)
  return ans
  function preOrder (root) {
    if (!root) {
      return
    }
    ans.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
  }
}