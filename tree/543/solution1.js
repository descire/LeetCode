const diameterOfBinaryTree = root => {
  let sum = 0
  postOrder(root)
  return sum
  function postOrder (root) {
    if (!root) {
      return 0
    }
    const left = postOrder(root.left)
    const right = postOrder(root.right)
    sum = Math.max(sum, left + right)
    return Math.max(right, left) + 1
  }
}