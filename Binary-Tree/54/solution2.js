/**
 * 利用 BST 的特性
 * 提前返回
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const kthLargest = function(root, k) {
  let ans = null;
  const help = root => {
    if (!root) {
      return;
    }
    if (k <= 0) {
      return;
    }
    help(root.right);
    if (k === 1) {
      ans = root.val;
      k--;
      return;
    }
    k--;
    help(root.left);
  }

  help(root);
  return ans;
};