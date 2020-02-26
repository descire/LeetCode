/**
 * https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/
 * 
 * 1337. 方阵中战斗力最弱的 K 行
 * 
 * Easy
 * 
 * 64ms 93.75%
 * 35.2mb 100.00
 * 
 * 考点
 * 
 * - 数组基本操作
 * - 多条件排序
 */
const kWeakestRows = (mat, k) => mat.map((subArray, index) => [index, subArray.reduce((a, b) => a + b, 0)])
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .slice(0, k)
  .map(item => item[0])