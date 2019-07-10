/**
 * 226. 翻转二叉树
 * 
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 
 * Easy
 * 
 * 68ms 98.02%
 * 
 * 34.2mb 5.92%
 */
const invertTree = (root) => {
  if (!root) {
    return null
  }
  // 交换左右子树
  [root.left, root.right] = [root.right, root.left]

  // 递归处理左右子树
  invertTree(root.left)
  invertTree(root.right)
  return root
}