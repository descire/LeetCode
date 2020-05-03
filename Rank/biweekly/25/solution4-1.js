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
 */
const MOD = 10 ** 9 + 7;
const numberWays = hats => {
  const max = hats.length;
  const dp = new Map();
  return dfs(0, 0);

  function dfs(index, used) {
    if (index === max) {
      return 1;
    }

    if (dp.has(used)) {
      return dp.get(used);
    }

    let sum = 0;
    const hat = hats[index];
    for (let i = 0; i < hat.length; i++) {
      if ((used & (1 << hat[i])) === 0) {
        sum = (sum + dfs(index + 1, used | (1 << hat[i]))) % MOD;
      }
    }
    dp.set(used, sum);
    return sum;
  }
}

console.log(numberWays([[3,4],[4,5],[5]]) === 1);
console.log(numberWays([[3,5,1],[3,5]]) === 4);
console.log(numberWays([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]) === 24);
console.log(numberWays([[1,2,3],[2,3,5,6],[1,3,7,9],[1,8,9],[2,5,7]]) === 111);