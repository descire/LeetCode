const averageOfLevels = root => {
  const ans = []
  help(root, 0)
  for (let i = 0; i < ans.length; i++) {
    const item = ans[i]
    const max = item.length
    ans[i] = item.reduce((pre, next) => pre + next, 0) / max
  }
  return ans
  function help (root, level) {
    if (!root) {
      return
    }
    if (!ans[level]) {
      ans[level] = []
    }
    ans[level].push(root.val)
    help(root.left, level + 1)
    help(root.right, level + 1)
  }
}