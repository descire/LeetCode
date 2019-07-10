const findTilt = root => {
  function postOrder (root) {
    if (!root) {
      return 0
    }
    const left = postOrder(root.left)
    const right = postOrder(root.right)

    sum += Math.abs(left - right)
    return root.val + left + right
  }
  let sum = 0
  postOrder(root)
  return sum
}