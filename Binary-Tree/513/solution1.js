const findBottomLeftValue = root => {
  if (!root) {
    return null
  }
  let currentLevel = 0
  let ans = root.val

  inOrder(root, 0)

  return ans

  function inOrder (root, level) {
    if (!root) {
      return
    }

    if (level > currentLevel) {
      currentLevel = level
      ans = root.val
    }
    inOrder(root.left, level + 1)
    inOrder(root.right, level + 1)
  }
}