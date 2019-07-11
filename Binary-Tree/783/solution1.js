/**
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
 * 
 * 783. 二叉搜索树结点最小距离
 * 
 * Easy
 * 
 * 80ms 80.22%
 * 34.6mb 45.00%
 */
const minDiffInBST = root => {
  let ans = Number.MAX_SAFE_INTEGER
  let pre = null

  function inOrder(root) {
    if (!root) {
      return
    }
    inOrder(root.left)
    if (pre) {
      ans = Math.min(ans, Math.abs(pre - root.val))
    }
    pre = root.val
    inOrder(root.right)
  }

  inOrder(root)
  return ans
}