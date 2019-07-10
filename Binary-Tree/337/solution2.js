/**
 * https://leetcode.com/problems/house-robber-iii/
 * 
 * 337. House Robber III
 * 
 * [Medium]
 * 
 * 记忆化处理递归
 */

const rob = root => {
  const ans = robSub(root)
  return Math.max(ans[0], ans[1])

  function robSub (root) {
    if (!root) {
      return [0, 0]
    }
    const left = robSub(root.left)
    const right = robSub(root.right)

    const res = []

    // 根节点不抢
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 根节点抢
    res[1] = root.val + left[0] + right[0]

    return res
  }
}
