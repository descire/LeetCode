/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
 const levelOrderBottom = root => {
  const ans = [];
  dfs(root, 0, ans);
  ans.reverse();
  return ans;
}

function dfs(root, level, ans) {
  if (!root) {
    return;
  }

  if (!ans[level]) {
    ans[level] = [];
  }

  ans[level].push(root.val);
  dfs(root.left, level + 1, ans);
  dfs(root.right, level + 1, ans);
  return;
}
