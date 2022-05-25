/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 
 */
const kthSmallest = (root, k) => {
  let ans = 0;
  let count = 0;

  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    if (++count === k) {
      ans = root.val;
      return;
    }
    dfs(root.right);
  }

  dfs(root);

  return ans;
}