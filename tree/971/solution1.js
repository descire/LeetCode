const flipMatchVoyage = (root, voyage) => {
  let ans = []
  let position = 0

  preOrder(root, voyage)

  return ans

  function preOrder (root, voyage) {
    if (!root) {
      return
    }
    if (root.val !== voyage[position++]) {
      ans = [-1]
      return
    }
    if (root.left && root.left.val !== voyage[position]) {
      ans.push(root.val)
      preOrder(root.right, voyage)
      preOrder(root.left, voyage)
    } else {
      preOrder(root.left, voyage)
      preOrder(root.right, voyage)
    }
  }
}