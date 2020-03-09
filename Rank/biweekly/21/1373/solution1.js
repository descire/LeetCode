/**
 * https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
 * 
 * 1373. 二叉搜索子树的最大键值和
 * 
 * Hard
 * 
 * 232ms 100.00%
 * 77.6mb 100.00%
 */
const maxSumBST = root => {
  if (!root) {
    return 0;
  }

  let ans = 0;
  help(root);
  return ans;

  function help(root) {
    if (!root) {
      return [true, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
    }

    const leftTree = help(root.left);
    const rightTree = help(root.right);

    let sum;
    let min;
    let max;

    if (!leftTree[0] || !rightTree[0] || root.val <= leftTree[2] || root.val >= rightTree[1]) {
      return [false, 0, 0, 0];
    }

    min = root.left ? leftTree[1] : root.val;
    max = root.right ? rightTree[2] : root.val;
    sum = root.val + leftTree[3] + rightTree[3];
    ans = Math.max(ans, sum);
    return [true, min, max, sum];
  }
}