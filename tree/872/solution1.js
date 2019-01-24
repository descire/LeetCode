const leafSimilar = (root1, root2) => {

  const x = help(root1, [])
  const y = help(root2, [])

  if (x.length !== y.length) {
    return false
  }

  for (let i = 0; i < x.length; i++) {
    const item1 = x[i]
    const item2 = y[i]
    if (item1 !== item2) {
      return false
    }
  }

  return true

  // 递归遍历
  function help (root, leaves) {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      leaves.push(root.val)
    } else {
      help(root.left, leaves)
      help(root.right, leaves)
    }
    return leaves
  }
}