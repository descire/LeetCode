const maxDepth = function(root) {
  let ans = 0;
  const help = root => {
    if (!root) {
      return 0;
    }
    const maxHeight = Math.max(help(root.left) + 1, help(root.right) + 1);
    ans = Math.max(ans, maxHeight);
    return maxHeight;
  }

  help(root);

  return ans;
};