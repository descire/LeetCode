const kthSmallest = (root, k) => {
  let index = 0
  let ans = null
  if (!root) {
    return ans
  }
  inOrder(root)
  return ans
  function inOrder (root) {
    if (!root) {
      return
    }
    inOrder(root.left)
    if (++index === k) {
      ans = root.val
      return
    }
    inOrder(root.right)
  }
}