/**
 * https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
 * 
 * 701. 二叉搜索树中的插入操作
 * 
 * Medium
 * 
 * 168ms 66.67%
 * 42.3mb 9.09%
 */
const insertIntoBST = (root, val) => {
  if (!root) {
    return new TreeNode(val)
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val)
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val)
  }

  return root
}