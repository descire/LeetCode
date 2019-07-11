/**
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/
 * 
 * 993. 二叉树的堂兄弟节点
 * 
 * Easy
 * 
 * 80ms 87.88%
 * 34.7mb 40.00%
 */
const isCousins = (root, x, y) => {

  let xRoot = null
  let xLevel = 0
  let yRoot = null
  let yLevel = 0

  preOrder(root, x, y, 0, null)

  return (xRoot !== yRoot && xLevel === yLevel)

  function preOrder(root, x, y, level, p) {
    if (!root) {
      return
    }
  
    if (root.val === x) {
      xRoot = p
      xLevel = level
    }
    if (root.val === y) {
      yRoot = p
      yLevel = level
    }
  
    preOrder(root.left, x, y, level + 1, root)
    preOrder(root.right, x, y, level + 1, root)
  }
}