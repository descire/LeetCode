const flipEquiv = (root1, root2) => {
  if (!root1 && !root2) {
    return true
  }
  if (!root1 || !root2) {
    return false
  }

  if (root1.val === root2.val) {
    const x = flipEquiv(root1.left, root2.left)
    const y = flipEquiv(root1.right, root2.right)
    const z = flipEquiv(root1.left, root2.right)
    const k = flipEquiv(root1.right, root2.left)
    return (x && y || z && k)
  } else {
    return false
  }
}