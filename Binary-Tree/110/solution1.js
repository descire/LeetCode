/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * 
 * 110. 平衡二叉树
 * 
 * Easy
 * 
 * 96ms 95.09%
 * 37.9mb 15.84%
 */
const isBalanced = root => {
  if (!root) {
    return true
  }

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

function getHeight(root) {
  if (!root) {
    return 0
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}