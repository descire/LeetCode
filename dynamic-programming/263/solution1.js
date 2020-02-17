/**
 * https://leetcode-cn.com/problems/ugly-number/
 * 
 * 263. 丑数
 * 
 * Easy
 * 
 * 72ms 94.92%
 * 35.6mb 42.86%
 */
const isUgly = num => {
  //  特殊情况
  if (num <= 0) {
    return false;
  }

  while (num % 2 === 0) {
    num /= 2;
  }

  while (num % 3 === 0) {
    num /= 3;
  }

  while (num % 5 === 0) {
    num /= 5;
  }

  return num === 1;
}