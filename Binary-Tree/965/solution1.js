/**
 * 965. 单值二叉树
 * 
 * https://leetcode-cn.com/problems/univalued-binary-tree/
 * 
 * Easy
 * 
 * 76ms 84.96%
 * 34.2mb 6.98%
 * 
 */
const isUnivalTree = root => {
  if (!root) {
    return true
  }

  const queue = [root]
  const val = root.val

  while (queue.length) {
    const max = queue.length

    for (let i = 0; i < max; i++) {
      const item = queue.pop()

      if (item) {
        if (!isEqual(item.val, val)) {
          return false
        }
        if (item.left && !isEqual(item.left.val, val)) {
          return false
        }
        if (item.right && !isEqual(item.right.val, val)) {
          return false
        }

        item.left && queue.unshift(item.left)
        item.right && queue.unshift(item.right)
      }
    }
  }
  return true
}

function isEqual (val1, val2) {
  return val1 === val2
}