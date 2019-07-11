/**
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 * 
 * 543. 二叉树的直径
 * 
 * Easy
 * 
 * 92ms 93.98%
 * 37mb 75.00%
 * 
 */
const diameterOfBinaryTree = root => {
  let sum = 0
  postOrder(root)
  return sum
  function postOrder (root) {
    if (!root) {
      return 0
    }
    const left = postOrder(root.left)
    const right = postOrder(root.right)
    sum = Math.max(sum, left + right)
    return Math.max(right, left) + 1
  }
}