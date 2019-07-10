const findTarget = (root, k) => {
  let ans = false
  const s = new Set()

  inOrder(root)
  return ans
  function inOrder (root) {
    if (!root) {
      return
    }

    inOrder(root.left)
    const rest = k - root.val
    if (s.has(rest)) {
      ans = true
      return
    }
    s.add(root.val)
    inOrder(root.right)
  }
}