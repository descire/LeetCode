/**
 * dfs
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  const ans = [];
  dfs(root, 0);
  return ans.reverse();
  function dfs(root, depth) {
    if (!root) {
      return;
    }
    if (!ans[depth]) {
      ans[depth] = [];
    }
    ans[depth].push(root.val);
    if (root.left) {
      dfs(root.left, depth + 1);
    }
    if (root.right) {
      dfs(root.right, depth + 1);
    }
  }
};