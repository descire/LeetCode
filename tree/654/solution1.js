const constructMaximumBinaryTree = nums => {
  const len = nums.length
  if (!len) {
    return null
  }

  let max = nums[0]
  let index = 0
  for (let i = 1; i < len; i++) {
    const item = nums[i]
    if (item > max) {
      max = item
      index = i
    }
  }

  const root = new TreeNode(max)
  root.left = constructMaximumBinaryTree(nums.slice(0, index))
  root.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return root
}