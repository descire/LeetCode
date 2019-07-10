/**
 * https://leetcode-cn.com/problems/leaf-similar-trees/submissions/
 * 
 * 872. 叶子相似的树
 * 
 * Easy
 * 
 * 76ms 91.80%
 * 35.4mb 21.43%
 */
const leafSimilar = (root1, root2) => {

  const x = levelOrder(root1, [])
  const y = levelOrder(root2, [])

  if (x.length !== y.length) {
    return false
  }

  for (let i = 0; i < x.length; i++) {
    const item1 = x[i]
    const item2 = y[i]
    if (item1 !== item2) {
      return false
    }
  }

  return true
}

function levelOrder (root, leaves) {
  if (!root) {
    return
  }
  if (!root.left && !root.right) {
    leaves.push(root.val)
  } else {
    levelOrder(root.left, leaves)
    levelOrder(root.right, leaves)
  }
  return leaves
}