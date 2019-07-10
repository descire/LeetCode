const sortedArrayToBST = function (nums) {
  const max = nums.length
  if (max === 0) {
    return null
  }
  const mid = Math.floor(max / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1, max))
  return root
}