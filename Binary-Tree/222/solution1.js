const countNodes = root => {
  let ans = 0
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
    ans++
    inOrder(root.right)
  }
}