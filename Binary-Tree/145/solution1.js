/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const postorderTraversal = root => {
  const ans = [];
  help(root, ans);
  return ans
}

function help(root, ans) {
  if (!root) {
    return;
  }

  // 左
  help(root.left, ans);
  // 右
  help(root.right, ans);
  // 中
  ans.push(root.val);
}