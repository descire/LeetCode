/**
 * https://leetcode-cn.com/problems/chou-shu-lcof/
 * 
 * 49. 丑数
 * 
 * Medium
 * 
 * 72ms 100.00%
 * 
 * 37.3mb 100.00%
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

    if (result1 === min) {
      x++;
    }

    if (result2 === min) {
      y++;
    }

    if (result3 === min) {
      z++;
    }

    ans[i] = min;
  }

  return ans[n - 1];
}