/**
 * https://leetcode-cn.com/problems/maximum-binary-tree-ii/
 * 
 * 998. 最大二叉树 II
 * 
 * Medium
 * 
 * 80ms 92.31%
 * 34.7mb 28.57%
 */
const insertIntoMaxTree = (root, val) => {
  if (root && root.val > val) {
    root.right = insertIntoMaxTree(root.right, val);
    return root;
  }
  const _root = new TreeNode(val);
  _root.left = root;
  return _root;
}