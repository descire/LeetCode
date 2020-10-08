/**
 * 递归
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const sumRootToLeaf = root => {
  let sum = 0;
  const help = (root, path) => {
    if (!root) {
      return;
    }
    const newPath = path + '' + root.val;
    if (!root.left && !root.right) {
      sum += Number.parseInt(newPath, 2);
    }
    help(root.left, newPath);
    help(root.right, newPath);
  }

  help(root, '');
  return sum;
}
