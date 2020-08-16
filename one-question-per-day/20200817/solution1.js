/**
 *  递归 （自底向上）
 *  时间复杂度 O(n);
 *  空间复杂度 O(1);
 */
const isBalanced = root => {
  const ans = help(root);
  return ans[1];
}

function help(root) {
  if (!root) {
    return [0, true];
  }

  const [leftHeight, isLeftValid] = help(root.left);
  const [rightHeight, isRightValid] = help(root.right);
  const isValid = Math.abs(leftHeight - rightHeight) <= 1;
  return [Math.max(leftHeight, rightHeight) + 1, isValid && isLeftValid && isRightValid];
}