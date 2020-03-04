/**
 * https://leetcode-cn.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * 
 * 1368. 使网格图至少有一条有效路径的最小代价
 * 
 * Hard
 * 
 * 420ms 70.59%
 * 44.1mb 100.00%
*/

const changeDistance = [
  [0, 1], // 向右
  [0, -1], // 向左
  [1, 0], // 向下
  [-1, 0] // 向上
]
const minCost = grid => {
  const x = grid.length;
  const y = grid[0].length;

  const queue = [[0, 0, 0]];

  const visited = new Set();

  while(queue.length) {
    const first = queue.shift();
    const [cost, x1, y1] = first;
    if (visited.has(`${x1}-${y1}`)) {
      continue;
    }

    visited.add(`${x1}-${y1}`);

    if (x1 === x - 1 && y1 === y - 1)  {
      return cost;
    }

    // 尝试四个方向
    for (let i = 0; i < 4; i++) {
      const nx = x1 + changeDistance[i][0];
      const ny = y1 + changeDistance[i][1];
      if (nx < 0 || ny < 0 || nx >= x || ny >= y) {
        continue;
      }
      if (grid[x1][y1] === i + 1) {
        queue.unshift([cost, nx, ny]);
      } else {
        queue.push([cost + 1, nx, ny]);
      }
    }
  }

  return 0;
}
