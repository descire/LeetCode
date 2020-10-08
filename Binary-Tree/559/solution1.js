/**
 * 递归
 */
const maxDepth = function(root) {
  let ans = 0;

  const help = root => {
    if (!root) {
      return 0;
    }
    let max = 0;
    for (let i = 0; i < root.children.length; i++) {
      const item = root.children[i];
      max = Math.max(max, help(item));
    }
    ans = Math.max(ans, max + 1);
    return max + 1;
  }

  help(root);
  return ans;
};