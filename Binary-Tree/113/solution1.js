/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const pathSum = (root, sum) => {
  const ans = [];
  dfs(root, sum, [], ans);

  return ans;
}

function dfs(root, sum, path, ans) {
  if (!root) {
    return;
  }

  const _sum = sum - root.val;
  if (!root.left && !root.right && _sum === 0) {
    ans.push([...path, root.val])
  }

  dfs(root.left, _sum, [...path, root.val], ans);
  dfs(root.right, _sum, [...path, root.val], ans);
}