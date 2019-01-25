const postorderTraversal = root => {
  const ans = []
  if (!root) {
    return ans
  }
  postOrder(root)
  return ans

  function postOrder (root) {
    if (!root) {
      return
    }
    postOrder(root.left)
    postOrder(root.right)
    ans.push(root.val)
  }
}