const pathSum = (root, sum) => {
  if (!root) {
    return 0
  }

  return countPath(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)

  function countPath (root, sum) {
    let ans = 0
    if (!root) {
      return ans
    }

    if (root.val === sum) {
      ans++
    }

    ans += countPath(root.left, sum - root.val)
    ans += countPath(root.right, sum - root.val)

    return ans
  }
}