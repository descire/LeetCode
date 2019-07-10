const deleteNode = (root, key) => {
  if (!root) {
    return root
  }

  const rv = root.val

  if (rv > key) {
    root.left = deleteNode(root.left, key)
  } else if (rv < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (root.left && root.right) {
      // 左右节点都存在的情况， 这时需要在右子树中找一个最小值作为新的节点
      let min = root.right
      while (min.left) {
        min = min.left
      }
      root.val = min.val
      // 替换结束后，需要再删除刚刚找到的最小值
      root.right = deleteNode(root.right, min.val)
    } else {
      return root.left ? root.left : root.right
    }
  }
  return root
}