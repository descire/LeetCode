/**
 * 递归
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const postorderTraversal = function(root) {
  const ans = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    ans.push(root.val);
  }

  dfs(root);
  return ans;
};