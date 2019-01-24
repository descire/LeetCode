const rightSideView = root => {
  const ans = []
  levelOrder(root, 0)
  return ans
  function levelOrder (root, level) {
    if (!root) {
      return
    }
    ans[level] = root.val
    levelOrder(root.left, level + 1)
    levelOrder(root.right, level + 1)
  }
}