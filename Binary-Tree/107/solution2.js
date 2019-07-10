/**
 * 107. 二叉树的层次遍历 II
 * 
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 
 * 
 * Easy
 * 
 * 76ms 96.06%
 * 35.1mb 8.70%
 */
const levelOrderBottom = root => {
  const ans = []
  levelOrder(root, 0, ans)
  ans.reverse()
  return ans
}

function levelOrder(root, level, ans) {
  if (!root) {
    return null
  }
  ans[level] || (ans[level] = [])

  ans[level].push(root.val)

  levelOrder(root.left, level + 1, ans)
  levelOrder(root.right, level + 1, ans)
}

