/**
 * https://leetcode-cn.com/problems/minimum-number-of-frogs-croaking/
 * 
 * 数青蛙
 * 
 * Medium
 * 
 * 时间复杂度 O(n^2)
 * 
 * 空间复杂度 O(n)
 * 
 */
const strs = ['c', 'r', 'o', 'a', 'k'];
const charToMap = {
  c: 0,
  r: 1,
  o: 2,
  a: 3,
  k: 4,
}
const minNumberOfFrogs = croakOfFrogs => {
  const queue = [];
  let currentCount = 0;
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0, max = croakOfFrogs.length; i < max; i++) {
    if (croakOfFrogs[i] === strs[0]) {
      currentCount++;
      ans = Math.max(currentCount, ans);
      queue.push(1);
      continue;
    }

    const charIndex = charToMap[croakOfFrogs[i]];
    let startIndex = 0;
    while (startIndex < queue.length) {
      if (queue[startIndex] === charIndex && queue[startIndex] === 4) {
        currentCount--;
        queue.splice(startIndex, 1);
        break;
      }
      if (queue[startIndex] === charIndex) {
        queue[startIndex] += 1;
        break;
      }
      startIndex++;
    }
  }
  if (queue.length !== 0) {
    return -1;
  }
  return ans;
}