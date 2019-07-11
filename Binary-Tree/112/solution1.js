/**
 *  https://leetcode-cn.com/problems/path-sum/
 * 
 * 112. 路径总和
 * 
 * Easy
 * 
 * 96ms 84.76%
 * 37.5mb 8.05%
 */
const hasPathSum = (root, sum) => {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    return root.val === sum
  }
  const rest = sum - root.val
  const x = hasPathSum(root.left, rest)
  const y = hasPathSum(root.right, rest)
  return x || y
}