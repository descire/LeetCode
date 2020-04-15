/**
 * https://leetcode-cn.com/problems/number-of-ways-to-paint-n-x-3-grid/submissions/
 * 
 * 给 N x 3 网格图涂色的方案数
 * 
 * Hard
 * 
 * 68ms
 * 35.5mb
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
const MOD = 1e9 + 7
const numOfWays = n => {
  if (n < 1) {
    return 0;
  }
  let x = 6;
  let y = 6;
  
  for (let i = 0; i < n - 1; i++) {
    const x1 = (x * 3 + y * 2) % MOD;
    const y1 = (x * 2 + y * 2) % MOD;
    x = x1;
    y = y1;
  }

  return (x + y) % MOD;
}