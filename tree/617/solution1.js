const mergeTrees = (t1, t2) => {
  if (!t1 && !t2) {
    return null
  }
  if (!t1) {
    return t2
  }

  if (!t2) {
    return t1
  }

  const l = mergeTrees(t1.left, t2.left)
  const r = mergeTrees(t1.right, t2.right)

  const root = new TreeNode(t1.val + t2.val)
  root.left = l
  root.right = r
  return root
}