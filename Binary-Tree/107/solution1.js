/**
 * 107. 二叉树的层次遍历 II
 * 
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 
 * 
 * Easy
 * 
 * 64ms 100%
 * 35mb 11.80%
 */
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