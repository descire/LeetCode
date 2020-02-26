/**
 * https://leetcode-cn.com/problems/maximum-product-of-splitted-binary-tree/
 * 
 * 1339. 分裂二叉树的最大乘积
 * 
 * Medium
 * 
 * 考察点：
 *  - 二叉树
 *  - 哈希表
 * 
 * 220ms 57.14%
 * 70.2mb 100.00%
 * 
 */
const MAX_NUMBER = 10 ** 9 + 7;
const maxProduct = root => {
  const recordSubSum = new Set();
  const sum = computedSum(root, recordSubSum);
  let ans = 0;
  for (const subSum of recordSubSum.values()) {
    ans = Math.max((sum - subSum) * subSum, ans); 
  }
  return ans % MAX_NUMBER;
}

function computedSum(root, recordSubSum) {
  if (!root) {
    return 0;
  }
  const rootVal = root.val;
  const leftSum = computedSum(root.left, recordSubSum);
  const rightSum = computedSum(root.right, recordSubSum);
  const sum = rootVal + leftSum + rightSum;
  recordSubSum.add(leftSum);
  recordSubSum.add(rightSum);
  recordSubSum.add(sum);
  return sum;
}