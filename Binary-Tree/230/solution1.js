/**
 * 230. 二叉搜索树中第K小的元素
 * 
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * 
 * Medium
 * 
 * 96ms 90.91%
 * 39.3mb 51.39%
 */
const kthSmallest = (root, k) => {
  let ans = null
  let count = 0
  if (!root) {
    return ans
  }
  inOrder(root)
  return ans
  function inOrder(root) {
    if (!root) {
      return
    }
    inOrder(root.left)
    if (++count === k) {
      ans = root.val
      return
    }
    inOrder(root.right)
  }
}