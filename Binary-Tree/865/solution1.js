const subtreeWithAllDeepest = root => {
  return help(root)[1]
  function help (root) {
    if (!root) {
      return [-1, null]
    }
    const l = help(root.left)
    const r = help(root.right)

    const lHeight = l[0]
    const rHeight = r[0]

    const h = Math.max(rHeight, lHeight) + 1

    const v = lHeight === rHeight ? root : (lHeight > rHeight ? l[1] : r[1])

    return [h, v]
  }
}