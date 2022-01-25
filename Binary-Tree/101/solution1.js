/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  return _isSymmetric(root.left, root.right);
}

function _isSymmetric (left, right) {
  if (left === null && right === null) {
    return true;
  }

  if (left === null || right === null) {
    return false;
  }

  return (left.val === right.val && _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left));
}