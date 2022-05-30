/**
 * 递归
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const sumRootToLeaf = root => {
  let sum = 0;
  const dfs = (root, path) => {
    if (!root) {
      return;
    }
    path += String(root.val);
    if (!root.left && !root.right) {
      sum += Number.parseInt(path, 2);
      return;
    }

    dfs(root.left, path);
    dfs(root.right, path);
  }
  dfs(root, '');
  return sum;
}
