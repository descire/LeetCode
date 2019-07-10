/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 
 * 235. 二叉搜索树的最近公共祖先
 * 
 * Easy
 * 
 * 
 * 112ms 92.88%
 * 44.3mb 10.19%
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root) {
    return null
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}