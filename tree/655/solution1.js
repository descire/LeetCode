const printTree = root => {
  const h = getHeight(root)

  const w = (1 << h) - 1

  const ans = []

  // 初始化
  for (let i = 0; i < h; i++) {
    ans[i] = []
    for (let j = 0; j < w; j++) {
      ans[i][j] = ""
    }
  }

  print(root, 0, 0, w - 1)

  return ans

  // 二分填充
  function print (root, height, start, end) {
    if (!root) {
      return
    }
    const mid = Math.floor((start + end) / 2)
    ans[height][mid] = String(root.val)
    print(root.left, height + 1, start, mid - 1)
    print(root.right, height + 1, mid + 1, end)
  }

  function getHeight (root) {
    if (!root) {
      return 0
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
  }
}