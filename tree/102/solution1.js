const levelOrder = root => {
  const ans = []
  if (!root) {
    return ans
  }

  const q = [root]
  let deep = 0

  while (q.length) {
    const max = q.length

    for (let i = 0; i < max; i++) {
      const item = q.pop()
      if (item) {
        if (!ans[deep]) {
          ans[deep] = []
        }
        ans[deep].push(item.val)
        item.left && q.unshift(item.left)
        item.right && q.unshift(item.right)
      }
    }
    deep++
  }

  return ans
}