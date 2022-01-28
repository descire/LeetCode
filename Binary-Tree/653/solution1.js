/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

const findTarget = (root, k) => {
  let ans = false;
  const record = new Set();
  const help = (root) => {
    if (!root) {
      return;
    }

    help(root.left);
    const reset = k - root.val;
    if (record.has(reset)) {
      ans = true;
      return;
    }
    record.add(root.val);
    help(root.right);
  }

  help(root);
  return ans;
}