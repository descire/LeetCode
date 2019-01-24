const isBalanced = function (root) {

  if (!root) {
    return true
  }

  const left = height(root.left)
  const right = height(root.right)

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)

  function height (root) {
    if (!root) {
      return 0
    }
    return Math.max(height(root.left), height(root.right)) + 1
  }
}