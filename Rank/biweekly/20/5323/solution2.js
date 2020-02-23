/**
 * https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 * 
 * 
 * 5323. 根据数字二进制下 1 的数目排序
 * 
 * Easy
 * 
 * 76ms 100.00%
 * 36.1mb 100.00%
 * 
 */

const sortByBits = arr => {
  arr.sort((a, b) => {
    const x = getBitCount(a);
    const y = getBitCount(b);
    if (x - y == 0) {
      return a - b;
    }
    return x - y
  })
  return arr;
}

function getBitCount(num) {
  let ans = 0;
  while (num) {
    ans++;
    num &= (num - 1);
  }
  return ans;
}