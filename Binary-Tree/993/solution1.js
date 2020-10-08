/**
 * 递归
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const isCousins = (root, x, y) => {
  let xRoot = null;
  let xLevel = 0;
  let yRoot = null;
  let yLevel = 0;

  const help = (root, x, y, level, currentRoot) => {
    if (!root) {
      return;
    }

    if (root.val === x) {
      xRoot = currentRoot;
      xLevel = level;
    }

    if (root.val === y) {
      yRoot = currentRoot;
      yLevel = level;
    }
    help(root.left, x, y, level + 1, root);
    help(root.right, x, y, level + 1, root);
  }

  help(root, x, y, 0, null);

  return (xRoot !== yRoot && xLevel === yLevel);
}