/**
 * https://leetcode-cn.com/problems/same-tree/
 * 
 * 100. 相同的树
 * 
 * Easy
 * 
 * 递归的特性
 * 
 * 80ms 73.52%
 * 33.8% 19.32%
 */
const isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }

  return (p.val === q.val) && (isSameTree(p.left, q.left)) && (isSameTree(p.right, q.right))
}