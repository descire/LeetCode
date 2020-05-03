/**
 * https://leetcode-cn.com/problems/number-of-ways-to-wear-different-hats-to-each-other/
 * 
 * 每个人戴不同帽子的方案数
 * 
 * Hard
 * 
 * 
 * 时间复杂度 O(m^n);
 * 
 * 哈希表 + 二进制状态
 * 
 * 第 i 位为零表示 第 i 哥🎩没有被使用，1表示已经被使用 
 * 
 */
const MOD = 10 ** 9 + 7;
const numberWays = hats => {
  const m = hats.length;

  const dp = Array.from({ length: 41 }, () => Array(1 << m).fill(0));
  dp[0][0] = 1;

  // 记录每顶帽子可以有哪些人戴
  const record = new Map();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < hats[i].length; j++) {
      if (!record.has(hats[i][j])) {
        record.set(hats[i][j], []);
      }
      record.get(hats[i][j]).push(i);
    }
  }
  const statusLimit = 1 << m;
  for (let i = 1; i <= 40; i++) {
    for (let j = 0; j < statusLimit; j++) {
      dp[i][j] = dp[i - 1][j]; // 不戴此顶帽子
      for (const k of record.get(i) || []) {
        if ((j >> k) & 1) {
          // 没有重复
          dp[i][j] += dp[i - 1][j & (~(1 << k))]; // 没有戴此顶帽子的状态
          dp[i][j] %= MOD;
        }
      }
    }
  }
  return dp[40][statusLimit - 1];
}

console.log(numberWays([[3,4],[4,5],[5]]) === 1);
console.log(numberWays([[3,5,1],[3,5]]) === 4);
console.log(numberWays([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]) === 24);
console.log(numberWays([[1,2,3],[2,3,5,6],[1,3,7,9],[1,8,9],[2,5,7]]) === 111);