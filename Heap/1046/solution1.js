/**
 * https://leetcode-cn.com/problems/last-stone-weight/
 * 
 * 1046. 最后一块石头的重量
 * 
 * Easy
 * 
 * 56ms 98.88%
 * 34.2mb 100.00%
 */
const lastStoneWeight = stones => {
  stones.sort((x, y) => x - y);
  while(stones.length > 1) {
    const last1 = stones.pop();
    const last2 = stones.pop();
    if (last1 !== last2) {
      sortInsert(stones, Math.abs(last1 - last2));
    }
  }
  return stones.pop() || 0;
}

function sortInsert(sortedStones, val) {
  for (let i = 0, max = sortedStones.length; i < max; i++) {
    if (val < sortedStones[i]) {
      return sortedStones.splice(i, 0, val);
    }
  }
  sortedStones.push(val);
}