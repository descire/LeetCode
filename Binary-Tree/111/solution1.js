/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 
 * 111. 二叉树的最小深度
 * 
 * Easy
 * 
 * 84ms 96.55%
 * 37.5mb 22.22%
 */
const minDepth = function (root) {
  if (!root) {
    return 0
  }

  if (!root.left) {
    return minDepth(root.right) + 1
  }
  if (!root.right) {
    return minDepth(root.left) + 1
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}