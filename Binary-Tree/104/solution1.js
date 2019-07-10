/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 
 * 104. 二叉树的最大深度
 * 
 * Easy
 * 
 * 88ms 90.87%
 * 37.1mb 46.80%
 */
const maxDepth = root => {
  if (!root) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}