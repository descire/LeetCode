/**
 * 时间复杂度 O(n^3)
 * 
 * 104ms 41.6mb
 */
const minSwaps = function(grid) {
  const row = grid[0].length;

  // 统计每一行右边连续 0 的个数
  const record = Array(row).fill(0);
  for (let i = 0; i < row; i++) {
    for (let j = row - 1; j >= 0; j--) {
      if (grid[i][j] == 0) {
        record[i]++;
      } else {
        break;
      }
    }
  }

  let step = 0;

  for (let i = 0; i < row - 1; i++) {
    const currentMinZero = row - 1 - i;
    if (record[i] >= currentMinZero) {
      continue;
    }

    let isFlag = true; // 不可以将右上角全部填充成 0 
    for (let j = i + 1; j < row; j++) {
      if (record[j] >= currentMinZero) {
        step += (j - i);
        const temp = record[j];
        record.splice(j, 1);
        record.splice(i, 0, temp);
        isFlag = false;
        break;
      }
    }
    if (isFlag) {
      return -1;
    }
  }
  return step;
};