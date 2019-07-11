/**
 * https://leetcode-cn.com/problems/subtree-of-another-tree/
 * 
 * 572. 另一个树的子树
 * 
 * Easy
 * 
 * 104ms 100.00%
 * 38.7mb 62.79%
 */
const isSubtree = (s, t) => {

  if (!s) {
    return false
  }

  if (isSame(s, t)) {
    return true
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isSame (s, t) {
  if (!s && !t) {
    return true
  }
  if (!s || !t) {
    return false
  }
  if (s.val !== t.val) {
    return false
  }
  return isSame(s.left, t.left) && isSame(s.right, t.right)
}