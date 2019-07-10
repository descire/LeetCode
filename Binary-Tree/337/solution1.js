/**
 * https://leetcode.com/problems/house-robber-iii/
 * 
 * 337. House Robber III
 * 
 * [Medium]
 * 
 * 简单的递归处理
 */

const rob = root => {
  if (!root) {
    return 0
  }

  const rv = root.val

  const ll = root.left ? rob(root.left.left) : 0
  const lr = root.left ? rob(root.left.right) : 0
  const rl = root.right ? rob(root.right.left) : 0
  const rr = root.right ? rob(root.right.right) : 0

  return Math.max(rv + ll + lr + rl + rr, rob(root.left) + rob(root.right))
}
