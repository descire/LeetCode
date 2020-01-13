/**
 * https://leetcode-cn.com/problems/sort-characters-by-frequency/
 * 
 * 451. 根据字符出现频率排序
 * 
 * Medium
 * 
 * 80ms 85.55%
 * 37.6mb 72.97%
 */
const frequencySort = s => {
  const record = new Map();
  for (let i = 0, max = s.length; i < max; i++) {
    const str = s[i];
    if (!record.has(str)) {
      record.set(str, 0);
    }
    record.set(str, record.get(str) + 1);
  }

  const recordArray = [];
  for (let [key, value] of record.entries()) {
    recordArray.push({key, value});
  }

  recordArray.sort((a, b) => b.value - a.value);
  return recordArray.reduce((a, b) => a + b.key.repeat(b.value), '')
}