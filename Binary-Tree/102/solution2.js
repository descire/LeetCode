/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 * 102. 二叉树的层次遍历
 * 
 * Medium
 * 
 * DFS
 * 
 * 88ms 67.65%
 * 34.7mb 49.75%
 */
const levelOrder = root => {
  const ans = []
  dfs(root, 0, ans)
  return ans
}

function dfs(root, level, ans) {
  if (!root) {
    return
  }
  ans[level] || (ans[level] = [])
  ans[level].push(root.val)

  dfs(root.left, level + 1, ans)
  dfs(root.right, level + 1, ans)
}