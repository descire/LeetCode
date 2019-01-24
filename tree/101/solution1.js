const isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  return isSymmetricHelper(root.left, root.right)
  function isSymmetricHelper (left, right) {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null) {
      return false
    }
    return (left.val === right.val && isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left))
  }
}