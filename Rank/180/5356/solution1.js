/**
 * https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/
 * 
 * 5356. 矩阵中的幸运数
 * 
 * Easy
 * 
 * 80ms 100.00%
 * 36.6mb 100.00%
 */
const luckyNumbers = matrix => {
  const rows = matrix.length;
  let ans = [];
  for (let i = 0; i < rows; i++) {
    let rowMin = Number.MAX_SAFE_INTEGER;
    let currenMaxCol = -1;
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowMin > matrix[i][j]) {
        rowMin = matrix[i][j];
        currenMaxCol = j;
      }
    }
    let isValid = true;
    for (let k = 0; k < rows; k++) {
      if (k !== i && rowMin <= matrix[k][currenMaxCol]) {
        isValid = false;
      }
    }

    isValid && ans.push(rowMin);
  }

  return ans;
}