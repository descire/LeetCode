const pathSum = (root, sum) => {
  
  const ans = []
  if (!root) {
    return ans
  }

  order(root, sum, String(root.val))

  return ans

  function order (root, sum, path) {
    if (!root) {
      return
    }

    if (!root.left && !root.right && sum === root.val) {
      ans.push(path.split(','))
      return
    }

    root.left && order(root.left, sum - root.val, path + ',' + root.left.val)
    root.right && order(root.right, sum - root.val, path + ',' + root.right.val)

  }
}