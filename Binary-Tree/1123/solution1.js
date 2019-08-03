/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves/
 * 
 * 1123. 最深叶节点的最近公共祖先
 * 
 * Medium
 * 
 * 92ms 90.48%
 * 36.7mb 100.00%
 */
const lcaDeepestLeaves = root => {
  let ans = null;
  let max = -1;
  dfs(root, 0)
  return ans

  function dfs(root, depth) {
    if (!root) {
      return depth - 1;
    }
    const left = dfs(root.left, depth + 1);
    const right = dfs(root.right, depth + 1);
    if (depth > max) {
      max = depth;
    }
    if (left === max && right === max) {
      ans = root;
    }
  
    return Math.max(left, right);
  }
}