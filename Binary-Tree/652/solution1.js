const findDuplicateSubtrees = root => {
  const ans = []
  if (!root) {
    return ans
  }

  // 记录所有的路径
  const m = {}
  help(root)

  return ans

  function help (root) {
    if (!root) {
      return
    }

    const path = `${root.val},${help(root.left)},${help(root.right)}`

    m[path] = m[path] || 0
    if (m[path]++ === 1) {
      ans.push(root)
    }
    return path
  }
}