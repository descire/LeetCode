/**
 * https://leetcode-cn.com/problems/maximum-difference-between-node-and-ancestor/
 * 
 * 1026. 节点与其祖先之间的最大差值
 * 
 * Medium
 * 
 * 552ms 8.33%
 * 189.4mb 100.00%
 */
const maxAncestorDiff = root => {
  let ans = Number.MIN_SAFE_INTEGER;

  dfs(root, []);
  return ans;

  function dfs(root, parentList) {
    if (!root) {
      return null;
    }

    parentList.forEach(item => {
      ans = Math.max(Math.abs(root.val - item), ans);
    });

    dfs(root.left, [...parentList, root.val]);
    dfs(root.right, [...parentList, root.val]);
  }
}