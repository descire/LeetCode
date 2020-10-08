/**
 * 递归
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const getMinimumDifference = root => {
  let ans = Number.MAX_SAFE_INTEGER;
  let preValue = null;

  const help = root => {
    if (!root) {
      return 0;
    }
    help(root.left);
    if (preValue !== null) {
      ans = Math.min(ans, Math.abs(preValue - root.val));
    }
    preValue = root.val;
    help(root.right);
  }

  help(root);
  return ans;
}