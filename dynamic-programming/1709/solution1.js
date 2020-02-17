/**
 * https://leetcode-cn.com/problems/get-kth-magic-number-lcci/
 * 
 * 面试题 17.09. 第 k 个数
 * 
 * Medium
 * 
 * 76ms 100.00%;
 * 34.1mb 100.00%
 */
const getKthMagicNumber = (k) => {
  const ans = [1];
   
  let x = 0;
  let y = 0;
  let z = 0;

  for (let i = 1; i < k; i++) {
    let xNext = ans[x] * 3;
    let yNext = ans[y] * 5;
    let zNext = ans[z] * 7;
    const min = Math.min(xNext, yNext, zNext);
    if (min === xNext) {
      x++;
    }
    if (min === yNext) {
      y++;
    }
    if (min === zNext) {
      z++;
    }
    ans[i] = min;
  }
  return ans[k - 1];
}
