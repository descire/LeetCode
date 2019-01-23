const longestUnivaluePath = root => {
  let ans = 0
  if (!root) {
    return ans
  }

  preOrder(root, null)

  return ans

  function preOrder (root, rootValue) {
    if (!root) {
      return 0
    }
    const l = preOrder(root.left, root.val)
    const r = preOrder(root.right, root.val)
    ans = Math.max(ans, r + l)
    if (rootValue === root.val) {
      return 1 + Math.max(l, r)
    }
    return 0
  }
}