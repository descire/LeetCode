/**
 * https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/
 * 
 * 987. 二叉树的垂序遍历
 * 
 * Medium
 * 
 * 92ms 100.00%
 * 35.6mb 100%
 */
const verticalTraversal = root => {
  const record = new Set() // 记录每个节点的坐标
  dfs(root, record, 0, 0)

  // 多条件排序
  const temp = Array.from(record.keys()).sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2]
      }
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })

  const ans = []
  const max = temp.length
  let pre = null
  let index = 0
  for (let i = 0; i < max; i++) {
    const [x, y, value] = temp[i]
    const [x1, y1, value1] = temp[i + 1] || []
    if (x !== pre) {
      index = ans.push([]) - 1
      pre = x
    }
    ans[index].push(value)
  }
  return ans
}

function dfs(root, record, x, y) {
  if (!root) {
    return
  }
  record.add([x, y, root.val])
  dfs(root.left, record, x - 1, y - 1)
  dfs(root.right, record, x + 1, y - 1)
}