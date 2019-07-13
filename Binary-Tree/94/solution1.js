/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 
 * 94. 二叉树的中序遍历
 * 
 * Medium
 * 
 * 84ms 64.76%
 * 33.6mb 71.27%
 * 
 * DFS
 */
const inorderTraversal = root => {
  const ans = []
  dfs(root, ans)
  return ans
}

function dfs(root, ans) {
  if (!root) {
    return
  }
  dfs(root.left, ans)
  ans.push(root.val)
  dfs(root.right, ans)
}