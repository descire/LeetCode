/**
 * https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/
 * 
 * 530. 二叉搜索树的最小绝对差
 * 
 * Easy
 * 
 * 116ms 85.71%
 * 38mb 51.72%
 */
const getMinimumDifference = root => {
  let ans = Number.MAX_SAFE_INTEGER
  let pre = null
  function inOrder (root) {
    if (!root) {
      return
    }
    inOrder(root.left)
    if (pre !== null) {
      ans = Math.min(ans, Math.abs(root.val - pre))
    }
    pre = root.val
    inOrder(root.right)
  }

  inOrder(root)

  return ans
}