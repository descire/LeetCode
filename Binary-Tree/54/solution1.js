/**
 * 利用 BST 的特性
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const kthLargest = function(root, k) {
  const ans = [];
  help(root, ans);
  return ans[ans.length - k];
};

function help(root, record) {
  if (!root) {
    return;
  }
  root.left && help(root.left, record);
  record.push(root.val);
  root.right && help(root.right, record);
}