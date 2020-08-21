/**
 * 
 * DFS
 */
const minDepth = function(root) {
  if (!root) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }

  let min = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    min = Math.min(min, minDepth(root.left));
  }
  if (root.right) {
    min = Math.min(min, minDepth(root.right));
  }

  return min + 1;
};