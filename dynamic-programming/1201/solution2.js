/**
 * https://leetcode-cn.com/problems/ugly-number-iii/
 * 
 * 1201. 丑数 III
 * 
 * Medium
 * 
 * 二分法
 * 
 * 60ms 94.12%
 * 34.2mb 80.00%
 * 
 */
const nthUglyNumber = (n, a, b, c) => {
  let start = 1;
  let end = 2 * (10 ** 9);

  const ab = getLCM(a, b);
  const ac = getLCM(a, c);
  const bc = getLCM(b, c);
  const abc = getLCM(a, bc);

  while (end > start) {
    const mid = Math.floor(start + (end - start) / 2);
    const nth = Math.floor(mid / a) + Math.floor(mid / b) + Math.floor(mid / c ) - Math.floor(mid / ab) - Math.floor(mid / ac) - Math.floor(mid / bc) + Math.floor(mid / abc);
    if (nth >= n) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

// 求解最大公约数 辗转相除法
function getGCD(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (max % min === 0) {
    return min;
  }
  return getGCD(max % min, min);
}

// 求解最小公倍数
function getLCM(a, b) {
  return a * b / getGCD(a, b);
}