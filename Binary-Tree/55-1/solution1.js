/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const maxDepth = function(root) {
  let ans = 0;

  const help = (root) => {
    if (!root) {
      return 0;
    }

    const maxHeight = Math.max(help(root.left), help(root.right)) + 1;
    ans = Math.max(maxHeight, ans);
    return maxHeight;
  }

  help(root);
  return ans;
};