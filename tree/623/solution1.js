const addOneRow = (root, v, d) => {
  if (!root) {
    return null
  }
  const q = [root]
  let deep = 1
  if (d === 1) {
    const r = new TreeNode(v)
    r.left = root
    return r
  }
  while(deep < d - 1) {
    const max = q.length

    for (let i = 0; i < max; i++) {
      const item = q.pop()

      if (item) {
        item.left && q.unshift(item.left)
        item.right && q.unshift(item.right)
      }
    }
    deep++
  }

  // 插入节点
  for (let i = 0; i < q.length; i++) {
    const item = q[i]
    const x = item.left
    item.left = new TreeNode(v)
    item.left.left = x

    const y = item.right
    item.right = new TreeNode(v)
    item.right.right = y
  }
  return root
}