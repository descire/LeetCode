/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const help = (root, ans) => {
  if (!root) {
    return;
  }
  // 左
  help(root.left, ans);
  // 中
  ans.push(root.val);
  // 右
  help(root.right, ans);
}

const inorderTraversal = root => {
  const ans = [];
  help(root, ans);
  return ans;
}