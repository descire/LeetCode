const hasPathSum = (root, sum) => {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return root.val === sum
  }
  const rest = sum - root.val
  const x = hasPathSum(root.left, rest)
  const y = hasPathSum(root.right, rest)
  return x || y
}