/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 * 102. 二叉树的层次遍历
 * 
 * Medium
 * 
 * BFS
 * 
 * 88ms 67.65%
 * 34.6mb 58.21%
 */
const levelOrder = root => {
  const ans = []
  if (!root) {
    return ans
  }

  const queue = [root]

  while (queue.length) {
    const children = []
    const max = queue.length

    for (let i = 0; i < max; i++) {
      const item = queue.pop()
      children.push(item.val)
      item.left && queue.unshift(item.left)
      item.right && queue.unshift(item.right)
    }
    ans.push(children)
  }

  return ans
}