/**
 * https://leetcode-cn.com/problems/maximum-difference-between-node-and-ancestor/
 * 
 * 1026. 节点与其祖先之间的最大差值
 * 
 * Medium
 * 
 * 88ms 83.33%
 * 38.3mb 100.00%
 */
const maxAncestorDiff = root => {
  let ans = Number.MIN_SAFE_INTEGER;

  dfs(root);
  return ans;

  function dfs(root) {
    if (!root) {
      return 0;
    }

    let max = root.val;
    let min = root.val;
    if (root.left) {
      const [maxVal, minVal] = dfs(root.left);
      max = Math.max(max, maxVal);
      min = Math.min(min, minVal);
    }

    if (root.right) {
      const [maxVal, minVal] = dfs(root.right);
      max = Math.max(max, maxVal);
      min = Math.min(min, minVal);
    }

    ans = Math.max(ans, Math.abs(root.val - max), Math.abs(root.val - min));

    return [max, min];
  }
}