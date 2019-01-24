const generateTrees = n => {

  return help(1, n)

  function help (min, max) {
    const result = []
    if (min > max) {
      return result
    }

    for (let mid = min; mid <= max; mid++) {
      // 得到左右子树
      const leftTree = help(min, mid - 1)
      const rightTree = help(mid + 1, max)

      const llen = leftTree.length
      const rlen = rightTree.length

      if (llen === 0 && rlen === 0) {
        // 左右子树为空的情况
        const root = new TreeNode(mid)
        result.push(root)
      } else if (llen === 0) {
        // 只有右子树的情况
        for (let i = 0; i < rlen; i++) {
          const root = new TreeNode(mid)
          root.right = rightTree[i]
          result.push(root)
        }
      } else if (rlen === 0) {
        // 只有左子树的情况
        for (let i = 0; i < llen; i++) {
          const root = new TreeNode(mid)
          root.left = leftTree[i]
          result.push(root)
        }
      } else {
        // 左右子树组合的情况
        for (let i = 0; i < llen; i++) {
          for (let j = 0; j < rlen; j++) {
            const root = new TreeNode(mid)
            root.left = leftTree[i]
            root.right = rightTree[j]
            result.push(root)
          }
        }
      }
    }

    return result
  }
}