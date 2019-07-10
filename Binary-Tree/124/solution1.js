/**
 * 
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 * 
 * 124. Binary Tree Maximum Path Sum
 * 
 * 【Hard】
 */

const maxPathSum = root => {
  let ans = Number.MIN_SAFE_INTEGER
  help(root)
  return ans

  function help (root) {
    if (!root) {
      return Number.MIN_SAFE_INTEGER
    }
    const rv = root.val
    const lMax = help(root.left)
    const rMax = help(root.right)

    const currentSum = Math.max.call(null, rv, rv + lMax, rv + rMax)
    ans = Math.max.call(null, ans, currentSum, lMax, rMax, rv + rMax + lMax)

    return currentSum
  }
}