const increasingBST = root => {
  if (!root) {
    return null
  }

  const ans = []
  help(root)
  const tree = new TreeNode(ans[0])
  let pre = tree
  for (let i = 1, max = ans.length; i < max; i++) {
    pre.right = new TreeNode(ans[i])
    pre = pre.right
  }
  return tree
  function help (root) {
    if (!root) {
      return
    }
    help(root.left)
    ans.push(root.val)
    help(root.right)
  }
}