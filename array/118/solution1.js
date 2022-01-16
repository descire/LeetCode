/**
 * 时间复杂度：O(numRows^2)
 * 空间复杂度：O(1)
 */
 var generate = function(numRows) {
  const ans = [];

  for (let i = 0; i < numRows; i++) {
      const row = new Array(i + 1).fill(1);
      for (let j = 1; j < row.length - 1; j++) {
          row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
      }
      ans.push(row);
  }
  return ans;
};