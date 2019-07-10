const sumNumbers = root => {
  return order(root, 0)
  function order (root, sum) {
    if (!root) {
      return 0
    }
    sum = root.val + sum * 10
    if (!root.left && !root.right) {
      return sum
    }
    return order(root.left, sum) + order(root.right, sum)
  }
}