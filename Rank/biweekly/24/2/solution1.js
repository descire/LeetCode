/**
 * https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 * 
 * 和为 K 的最少斐波那契数字数目
 * 
 * Medium
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const findMinFibonacciNumbers = k => {
  const record = fibByTopLimit(k);
  let ans = 0;
  for (let i = record.length - 1; i >= 0; i--) {
    if (record[i] <= k) {
      ans++;
      k -= record[i];
    }
  }
  return ans;
}

function fibByTopLimit(k) {
  let x = 1;
  let y = 1;
  let record = [1, 1];
  if (k < 2) {
    return record;
  }
  while (true) {
    const sum = x + y;
    if (sum > k) {
      return record;
    }
    record.push(sum);
    x = y;
    y = sum;
  }
}