/**
 * https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/
 * 
 * 501. 二叉搜索树中的众数
 * 
 * Easy
 * 
 * 112ms 86.79%
 * 42.9mb 19.23%
 */
const findMode = root => {
  let max = 0
  const record = new Map()
  inOrder(root, record)

  let ans = []

  for (let [key, value] of record.entries()) {
    if (value === max) {
      ans.push(key)
    }
  }

  return ans
  function inOrder(root, record) {
    if (!root) {
      return
    }
    inOrder(root.left, record)
    const originCount = record.get(root.val) || 0
    record.set(root.val, originCount + 1)
    max = Math.max(max, originCount + 1)
    inOrder(root.right, record)
  }
}