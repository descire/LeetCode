/**
 * https://leetcode-cn.com/problems/ugly-number-iii/
 * 
 * 1201. 丑数 III
 * 
 * Medium
 * 
 * time limit
 */
const nthUglyNumber = (n, a, b, c) => {
  let startInex = 1;
  let c1 = 1;
  let c2 = 1;
  let c3 = 1;

  while (startInex++ <= n) {
    const r1 = c1 * a;
    const r2 = c2 * b;
    const r3 = c3 * c;

    const min = Math.min(r1, r2, r3);

    if (r1 === min) {
      c1++;
    }

    if (r2 === min) {
      c2++;
    }

    if (r3 === min) {
      c3++;
    }

    if (startInex === n + 1) {
      return min;
    }
  }
}