/**
 * https://leetcode-cn.com/problems/surface-area-of-3d-shapes/
 * 
 * 892. 三维形体的表面积
 * 
 * Easy
 * 
 * 68ms 76.92%
 * 34.8mb 93.33%
 */
const surfaceArea = grid => {
  let count = 0;
  let overlapCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] !== 0) {
        count += grid[i][j];
        overlapCount += grid[i][j] - 1;

        // 计算前面相邻的个数
        if (j - 1 >= 0) {
          overlapCount += Math.min(grid[i][j], grid[i][j - 1]);
        }

        if (i - 1 >= 0) {
          overlapCount += Math.min(grid[i][j], grid[i - 1][j]);
        }
      }
    }
  }

  return count * 6 - overlapCount * 2;
}