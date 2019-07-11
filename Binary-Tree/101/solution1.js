/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 
 * 101. 对称二叉树
 * 
 * Easy
 * 
 * 84ms 92.13%
 * 35.4mb 58.84%
 */

const isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return _isSymmetric(root.left, root.right)
}

function _isSymmetric (left, right) {
  if (left === null && right === null) {
    return true
  }
  if (left === null || right === null) {
    return false
  }
  return (left.val === right.val && _isSymmetric(left.left, right.right) && _isSymmetric(left.right, right.left))
}