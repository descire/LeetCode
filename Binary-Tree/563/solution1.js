/**
 * 
 * https://leetcode-cn.com/problems/binary-tree-tilt/
 * 
 * 563. 二叉树的坡度
 * 
 * Easy
 * 
 * 108ms 73.33%
 * 38.3mb 26.67%
 */
const findTilt = root => {
  let sum = 0
  postOrder(root)
  return sum

  function postOrder (root) {
    if (!root) {
      return 0
    }
    const leftSum = postOrder(root.left)
    const rightSum = postOrder(root.right)

    sum += Math.abs(leftSum - rightSum)
    return root.val + leftSum + rightSum
  }
}