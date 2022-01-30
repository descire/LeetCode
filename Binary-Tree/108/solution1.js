/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(logn)
 * 
 */
const help = (nums, start, end) => {
  if (start > end) {
    return null;
  }
  const mid = Math.floor((start + end + 1) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = help(nums, start, mid - 1);
  root.right = help(nums, mid + 1, end);
  return root;
}
const sortedArrayToBST = function (nums) {
  return help(nums, 0, nums.length - 1);
}