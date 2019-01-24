const flatten = root => {
  let cur = null
  order(root)
  function order (root) {
    if (!root) {
      return null
    }
    order(root.right)
    order(root.left)
    root.right = cur
    root.left = null
    cur = root
  }
}