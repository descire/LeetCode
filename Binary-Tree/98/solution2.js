const isValidBST = root => {

  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

  function helper (root, start, end) {
    if (!root) {
      return true
    }
    const rv = root.val
    const x = rv > start && rv < end
    return x && helper(root.left, start, rv) && helper(root.right, rv, end)
  }
}