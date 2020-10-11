/**
 * 递归
 */
const getMinimumDifference = root => {
  let ans = Number.MAX_SAFE_INTEGER;
  let preValue = null;

  const help = root => {
    if (!root) {
      return;
    }
    
    help(root.left);
    // 注意判断
    if (preValue !== null) {
      ans = Math.min(ans, Math.abs(preValue - root.val));
    }
    preValue = root.val;
    help(root.right);
  }

  help(root);
  return ans;
}