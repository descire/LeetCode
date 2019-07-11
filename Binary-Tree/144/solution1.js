/**
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * 
 * 144. 二叉树的前序遍历
 * 
 * Medium
 * 
 * 56ms 99.52%
 * 34mb 7.26%
 */
const preorderTraversal = root => {
  const ans = []
  preOrder(root, ans)
  return ans
}

function preOrder (root, ans) {
  if (!root) {
    return
  }
  // 访问根
  ans.push(root.val)
  // 前序遍历左子树
  preOrder(root.left, ans)
  // 前序遍历右子树
  preOrder(root.right, ans)
}