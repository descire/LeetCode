/**
 * 深度优先遍历
 */
const binaryTreePaths = function(root) {
  const ans = [];
  dfs(root, []);
  return ans;
  function dfs(root, paths) {
    if (!root) {
      return
    }
    const newPath = paths.concat(root.val);
    if (!root.left && !root.right) {
      ans.push(newPath.join('->'));
    }
    dfs(root.left, newPath);
    dfs(root.right, newPath);
  }
};