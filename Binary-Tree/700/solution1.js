/**
 * 700. 二叉搜索树中的搜索
 * 
 * https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
 * 
 * Easy
 * 
 * 116ms 90.57%
 * 42.3mb 15.47%
 */
const searchBST = (root, val) => {
  if (!root) {
    return null
  }
  if (root.val === val) {
    return root
  }

  if (root.val > val) {
    return searchBST(root.left, val)
  }
  if (root.val < val) {
    return searchBST(root.right, val)
  }
}