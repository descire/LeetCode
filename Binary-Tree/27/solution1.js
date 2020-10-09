/**
 * 递归
 */
const mirrorTree = function(root) {
  if (!root) {
    return null;
  }
  const temp =  root.left;
  root.left =  mirrorTree(root.right);
  root.right = mirrorTree(temp);
  return root;
};