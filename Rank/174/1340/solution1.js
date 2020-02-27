/**
 * https://leetcode-cn.com/problems/jump-game-v/
 * 
 * 1340. 跳跃游戏 V
 * 
 * Hard
 * 
 * 92ms 93.33%
 * 38.2mb 100.00%
 * 
 * 考察点
 * - 递归
 */
const maxJumps = (arr, d) => {
  const record = [];
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = Math.max(help(arr, d, i, record) + 1, ans);
  }
  return ans;
}

function help(arr, d, index, record) {
  let ans = 0;
  const currentHeight = arr[index];
  if (record[index]) {
    return record[index];
  }

  // 向左边跳
  const minIndex = Math.max(0, index - d);
  for (let i = index - 1; i >= minIndex; i--) {
    if (currentHeight <= arr[i]) {
      break;
    }
    ans = Math.max(ans, help(arr, d, i, record) + 1);
  }

  // 向右边跳
  const maxIndex = Math.min(arr.length - 1, index + d);
  for (let i = index + 1; i <= maxIndex; i++) {
    if (currentHeight <= arr[i]) {
      break;
    }
    ans = Math.max(ans, help(arr, d, i, record) + 1);
  }

  record[index] = ans;
  return ans;
}