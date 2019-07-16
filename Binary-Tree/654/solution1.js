/**
 * https://leetcode-cn.com/problems/maximum-binary-tree/
 * 
 * 654. 最大二叉树
 * 
 * Medium
 * 
 * 140ms 85.71%
 * 41mb 82.14%
 * 
 */
const constructMaximumBinaryTree = nums => {
  if (nums.length === 0) {
    return null
  }
  const max = Math.max(...nums)
  const index = nums.indexOf(max)
  const root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return root
}