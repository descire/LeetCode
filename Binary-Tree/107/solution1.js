const levelOrderBottom = root => {
  const ans = []
  if (!root) {
    return ans
  }
  const queue = [root]
  while (queue.length) {
    const temp = []
    const max = queue.length
    for (let i = 0; i < max; i++) {
      const item = queue.pop()
      if (item) {
        temp.push(item.val)
        item.left && queue.unshift(item.left)
        item.right && queue.unshift(item.right)
      }
    }
    ans.unshift(temp)
  }
  return ans
}