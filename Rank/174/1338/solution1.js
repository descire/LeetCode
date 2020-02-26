/**
 * https://leetcode-cn.com/problems/reduce-array-size-to-the-half/
 * 
 * 1338. 数组大小减半
 * 
 * Medium
 * 
 * 132ms 92.68%
 * 66.6mb 100.00%
 * 
 * 考察点:
 * - 哈希表
 */
const minSetSize = arr => {
  const record = new Map();
  for (let i = 0, max = arr.length; i < max; i++) {
    if (!record.has(arr[i])) {
      record.set(arr[i], 0);
    }
    record.set(arr[i], record.get(arr[i]) + 1);
  }
  const sortedCount = [...record.values()].sort((a, b) => b - a);

  let halfLength = Math.floor(arr.length / 2);

  let currentTotalCount = 0;
  for (let i = 0; i < sortedCount.length; i++) {
    if (currentTotalCount + sortedCount[i] < halfLength) {
      currentTotalCount += sortedCount[i];
    } else {
      return i + 1;
    }
  }

  return sortedCount.length;
}