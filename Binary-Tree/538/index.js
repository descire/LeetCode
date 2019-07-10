/**
 * 538. 把二叉搜索树转换为累加树
 * 
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
 * 
 * Easy
 * 
 * 132ms 84.93%
 * 40.2mb 41.38%
 */
const convertBST = root => {
  let sum = 0
  dfs(root, 0)
  return root

  function dfs(root) {
    if (!root) {
      return
    }
    dfs(root.right)
    root.val += sum
    sum = root.val
    dfs(root.left)
  }
}