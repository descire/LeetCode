/**
 * https://leetcode-cn.com/problems/all-possible-full-binary-trees/
 * 
 * 894. 所有可能的满二叉树
 * 
 * Medium
 * 
 * 168ms 100%
 * 45.2mb 62.50%
 * 
 */
const cache = { 0: [], 1: [ new TreeNode(0) ]}
const allPossibleFBT = N => {
  const ans = []
  if (cache[N]) {
    return cache[N]
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
  cache[N] = ans
  return cache[N]
}