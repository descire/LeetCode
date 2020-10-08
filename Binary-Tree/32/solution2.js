/**
 * 递归
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const levelOrder = function(root) {
  const ans = [];
  if (!root) {
    return ans;
  }

  help(ans, root);
  return ans;
};

function help(ans, root, height = 0) {
  if (!root) {
    return;
  }
  if (!ans[height]) {
    ans[height] = [];
  }

  ans[height].push(root.val);
  root.left && help(ans, root.left, height + 1);
  root.right && help(ans, root.right, height + 1);
}