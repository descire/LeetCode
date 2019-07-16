/**
 * https://leetcode-cn.com/problems/binary-tree-pruning/
 * 
 * 814. 二叉树剪枝
 * 
 * Medium
 */
const pruneTree = root => {
  if (!root) {
    return null
  }
  root.left = pruneTree(root.left)
  root.right = pruneTree(root.right)
  return (root.val === 1 || root.left !== null || root.right !== null) ? root : null
}