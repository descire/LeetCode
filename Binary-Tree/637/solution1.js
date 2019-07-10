/**
 * https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/
 * 
 * 637. 二叉树的层平均值
 * 
 * Easy
 * 
 * 92ms 98.61%
 * 38.2mb 50.00%
 * 
 */
const averageOfLevels = root => {
  const ans = []
  levelOrder(root, 0, ans)
  for (let i = 0; i < ans.length; i++) {
    const item = ans[i]
    const max = item.length
    ans[i] = item.reduce((pre, next) => pre + next, 0) / max
  }
  return ans
}

function levelOrder (root, level, ans) {
  if (!root) {
    return
  }
  ans[level] || (ans[level] = [])
  ans[level].push(root.val)
  levelOrder(root.left, level + 1, ans)
  levelOrder(root.right, level + 1, ans)
}