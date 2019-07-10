/**
 * https://leetcode-cn.com/problems/merge-two-binary-trees/
 * 
 * 617. 合并二叉树
 * 
 * Easy
 * 
 * 120ms 97.63%
 * 40.9mb 22.34%
 */
const mergeTrees = (t1, t2) => {
  if (!t1 && !t2) {
    return null
  }
  if (!t1) {
    return t2
  }
  if (!t2) {
    return t1
  }

  const leftTree = mergeTrees(t1.left, t2.left)
  const rightTree = mergeTrees(t1.right, t2.right)

  const root = new TreeNode(t1.val + t2.val)

  root.left = leftTree
  root.right = rightTree

  return root
}