/**
 * 
 * 669. 修剪二叉搜索树
 * 
 * https://leetcode-cn.com/problems/trim-a-binary-search-tree/
 * 
 * Easy
 * 
 * 92ms 98.25%
 * 39.5mb 11.76%
 */

const trimBST = (root, L, R) => {
  if (!root) {
    return null
  }
  if (root.val < L) {
    return trimBST(root.right, L, R)
  }
  if (root.val > R) {
    return trimBST(root.left, L, R)
  }
  root.left = trimBST(root.left, L, R)
  root.right = trimBST(root.right, L, R)
  return root
}