const largestValues = root => {
  const ans = []
  if (!root) {
    return ans
  }

  const q = [root]
  while (q.length) {
    const len = q.length
    let max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < len; i++) {
      const item = q.pop()
      if (item) {
        max = Math.max(item.val, max)

        item.left && q.unshift(item.left)

        item.right && q.unshift(item.right)
      }
    }

    ans.push(max)
  }
  return ans
}