/**
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * 
 * 513. 找树左下角的值
 * 
 * Medium
 * 
 * 80ms 100.00%
 * 37.1mb 100.00%
 */
const findBottomLeftValue = root => {
  if (!root) {
    return null
  }

  let ans = 0
  let currentLevel = -1
  levelOrder(root, 0)
  return ans

  function levelOrder(root, level) {
    if (!root) {
      return
    }
    if (level > currentLevel) {
      currentLevel = level
      ans = root.val
    }
    levelOrder(root.left, level + 1)
    levelOrder(root.right, level + 1)
  }
}

