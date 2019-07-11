/**
 * https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers/
 * 
 * 1022. 从根到叶的二进制数之和
 * 
 * Easy
 * 
 * 80ms 94.55%
 * 36.4mb 100.00%
 */
const sumRootToLeaf = root => {
  let sum = 0
  dfs(root, '')

  return sum

  function dfs(root, path) {
    if (!root) {
      return
    }
    dfs(root.left, path + '' + root.val)
    dfs(root.right, path + '' + root.val)
    if (!root.left && !root.right) {
      sum += Number.parseInt(path + '' + root.val, 2)
    }
  }
}
