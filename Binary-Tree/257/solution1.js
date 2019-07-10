/**
 * 257. 二叉树的所有路径
 * 
 * https://leetcode-cn.com/problems/binary-tree-paths/
 * 
 * Easy
 * 
 * 72ms 98.09%
 * 35mb 6.00%
 * 
 */
const binaryTreePaths = root => {
  const ans = []
  if (!root) {
    return ans
  }

  order(root, String(root.val), ans)
  return ans
}

function order (root, path, ans) {
  if (!root) {
    return
  }
  if (!root.left && !root.right) {
    ans.push(path)
    return
  }

  root.left && order(root.left, path + '->' + root.left.val, ans)
  root.right && order(root.right, path + '->' + root.right.val, ans)
}