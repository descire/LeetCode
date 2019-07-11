/**
 * https://leetcode-cn.com/problems/longest-univalue-path/
 * 
 * 687. 最长同值路径
 * 
 * Easy
 * 
 * 264ms 85.25%
 * 52.5mb 25.00%
 */
const longestUnivaluePath = root => {
  let ans = 0
  if (!root) {
    return ans
  }
  preOrder(root)
  return ans
  function preOrder (root) {
    if (!root) {
      return 0
    }
    let disL = preOrder(root.left)
    let disR = preOrder(root.right)
    let l = 0
    let r = 0
    if (root.left && root.val === root.left.val) {
      l = disL + 1
    }
    if (root.right && root.val === root.right.val) {
      r = disR + 1
    }

    ans = Math.max(ans, l + r)
    return Math.max(l, r)
  }
}