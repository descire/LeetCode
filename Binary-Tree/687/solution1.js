const longestUnivaluePath = root => {
  let ans = 0
  if (!root) {
    return ans
  }
  preOrder(root)
  return ans
  function preOrder (root) {
    if (!root) {
      return 0
    }
    let disL = preOrder(root.left)
    let disR = preOrder(root.right)
    let l = 0
    let r = 0
    if (root.left && root.val === root.left.val) {
      l = disL + 1
    }
    if (root.right && root.val === root.right.val) {
      r = disR + 1
    }

    ans = Math.max(ans, l + r)
    return Math.max(l, r)
  }
}