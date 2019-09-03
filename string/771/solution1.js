/**
 * https://leetcode-cn.com/problems/jewels-and-stones/
 * 
 * 
 * 771. 宝石与石头
 * 
 * Easy
 * 
 * 72ms 96.19%
 * 33.8mb 67.26%
 * 
 */
const numJewelsInStones = (J, S) => {
  const record = new Set();
  for (let i = 0; i < J.length; i++) {
    record.add(J[i]);
  }

  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (record.has(S[i])) {
      count++;
    }
  }
  return count;
}