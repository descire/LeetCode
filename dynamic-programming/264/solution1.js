/**
 * https://leetcode-cn.com/problems/ugly-number-ii/
 * 
 * 264. 丑数 II
 * 
 * Medium
 * 
 * 68ms 94.37%
 * 36.6mb 96.92%
 * 
 */
const nthUglyNumber = n => {
  const ans = [1];
  let x = 0;
  let y = 0;
  let z = 0;

  for (let i = 1; i < n; i++) {
    const result1 = ans[x] * 2;
    const result2 = ans[y] * 3;
    const result3 = ans[z] * 5;
    const min = Math.min(result1, result2, result3);
    if (min === result1) {
      x++;
    }

    if (min === result2) {
      y++;
    }

    if (min === result3) {
      z++;
    }

    ans[i] = min;
  }

  return ans[n - 1];
}
