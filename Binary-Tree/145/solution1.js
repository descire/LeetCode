/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 
 * 145. 二叉树的后序遍历
 * 
 * Hard
 * 
 * 80ms 73.54%
 * 34mb 5.76%
 */
const postorderTraversal = root => {
  const ans = []
  dfs(root, ans)
  return ans
}

function dfs(root, ans) {
  if (!root) {
    return
  }
  dfs(root.left, ans)
  dfs(root.right, ans)
  ans.push(root.val)
}