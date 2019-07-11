/**
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
 * 
 * 404. 左叶子之和
 * 
 * Easy
 * 
 * 80ms 90.00%
 * 34.6mb 36.11%
 */
const sumOfLeftLeaves = root => {

  let sum = 0
  inOrder(root)
  return sum

  function inOrder(root) {
    if (!root) {
      return
    }
  
    inOrder(root.left)
    if (root.left && !root.left.left && !root.left.right) {
      // 左叶子节点
      sum += root.left.val
    }
    inOrder(root.right)
  }
}