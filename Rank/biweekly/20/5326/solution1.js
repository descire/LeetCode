/**
 * https://leetcode-cn.com/problems/count-all-valid-pickup-and-delivery-options/submissions/
 * 
 * 5326. 有效的快递序列数目
 * 
 * Hard
 * 
 * 56ms 100.00%
 * 34.3mb 100.00%
 */
const MAX_NUMBER = (10 ** 9 + 7);
const countOrders = n => {
  let ans = 1;
  if (!n) {
    return 0;
  }
  if (n === 1) {
    return ans;
  }
  for (let i = 2; i <= n; i++) {
    const k = i * 2 - 1;
    ans = ans * (k + k * (k - 1) / 2) % MAX_NUMBER;
  }

  return ans;
}