/**
 * 递归
 * 构造 BST
 */
const sortedArrayToBST = function(nums) {
  return help(nums);
};

function help(arr) {
  if (arr.length === 0) {
    return null;
  }
  const midIndex = Math.floor(arr.length / 2);
  const middle = arr[midIndex];
  const root = new TreeNode(middle);
  root.left = help(arr.slice(0, midIndex));
  root.right = help(arr.slice(midIndex + 1));
  return root;
}