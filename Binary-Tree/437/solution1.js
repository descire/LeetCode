/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
const pathSum = (root, sum) => {
  if (!root) {
    return 0;
  }

  return rootSum(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function rootSum (root, sum) {
  if (!root) {
    return 0;
  }

  let ans = 0;
  if (root.val === sum) {
    ans++;
  }

  ans += rootSum(root.left, sum - root.val);
  ans += rootSum(root.right, sum - root.val);

  return ans;
}