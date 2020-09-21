/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const convertBST = function(root) {
  let sum = 0;
  dfs(root);
  return root;
  function dfs(root) {
    if (!root) {
      return;
    }
    dfs(root.right);
    root.val += sum;
    sum = root.val;
    dfs(root.left);
  }
};
