const isValidBST = root => {
  const ans = []
  inOrder(root)
  for (let i = 0, max = ans.length; i < max - 1; i++) {
    const pre = ans[i]
    const next = ans[i + 1]
    if (next <= pre) {
      return false
    }
  }
  return true
  function inOrder (root) {
    if (!root) {
      return
    }
    inOrder(root.left)
    ans.push(root.val)
    inOrder(root.right)
  }
}