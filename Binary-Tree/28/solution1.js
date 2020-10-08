/**
 * 递归
 */
const isSymmetric = function(root) {
  const help = (left, right) => {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    return help(left.left, right.right) && help(left.right, right.left);
  }

  if (!root) {
    return true;
  }

  return help(root.left, root.right);
};