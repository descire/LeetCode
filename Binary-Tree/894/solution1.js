const allPossibleFBT = N => {
  const ans = []
  if (N % 2 === 0) {
    return ans
  }

  if (N === 1) {
    ans.push(new TreeNode(0))
    return ans
  }

  for (let i = 1; i < N; i += 2) {
    for (let l of allPossibleFBT(i)) {
      for (let r of allPossibleFBT(N - i - 1)) {
        const root = new TreeNode(0)
        root.left = l
        root.right = r
        ans.push(root)
      }
    }
  }
  return ans
}