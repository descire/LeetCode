const binaryTreePaths = root => {
  const ans = []
  if (!root) {
    return ans
  }

  preOrder(root, String(root.val))
  return ans
  function preOrder (root, path) {
    if (!root) {
      return
    }
    if (!root.left && !root.right) {
      ans.push(path)
      return
    }

    root.left && preOrder(root.left, path + '->' + root.left.val)
    root.right && preOrder(root.right, path + '->' + root.right.val)
  }
}