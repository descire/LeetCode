/**
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
 * 
 * 653. 两数之和 IV - 输入 BST
 * 
 * Easy
 * 
 * 108ms 100%
 * 41.6mb 61.76%
 */

const findTarget = (root, k) => {
  let ans = false
  const s = new Set()

  inOrder(root)
  return ans
  function inOrder (root) {
    if (!root) {
      return
    }

    inOrder(root.left)
    const rest = k - root.val
    if (s.has(rest)) {
      ans = true
      return
    }
    s.add(root.val)
    inOrder(root.right)
  }
}