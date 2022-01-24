/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const help = (root, ans) => {
  if (!root) {
    return;
  }

  ans.push(root.val);
  // 遍历左子树
  help(root.left, ans);
  // 遍历右子树
  help(root.right, ans);
}
const preorderTraversal = root => {
  const ans = [];
  help(root, ans);
  return ans;
}
