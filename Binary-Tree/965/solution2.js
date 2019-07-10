/**
 * 965. 单值二叉树
 * 
 * https://leetcode-cn.com/problems/univalued-binary-tree/
 * 
 * Easy
 * 
 * 72ms 94.69%
 * 34.3mb 6.98%
 */
const isUnivalTree = root => {
  if (!root) {
    return true
  }

  if (root.left && root.left.val !== root.val) {
    return false
  }
  if (root.right && root.right.val !== root.val) {
    return false
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right)
}