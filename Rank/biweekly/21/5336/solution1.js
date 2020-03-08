/**
 * https://leetcode-cn.com/problems/increasing-decreasing-string/
 * 
 * 5336. 上升下降字符串
 * 
 * Easy
 * 
 * 112ms 100.00%
 * 38.3mb 100.00%
 * 
 * 考点
 * 
 *  - Map
 *  - Sort
 */
const sortString = s => {
  if (!s.length) {
    return '';
  }

  let ans = '';
  const record = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!record.has(s[i])) {
      record.set(s[i], 0);
    }
    record.set(s[i], record.get(s[i]) + 1);
  }

  let isEven = true;
  while (record.size) {
    if (isEven) {
      // 找 递增
      const keys = [...record.keys()];
      keys.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      ans += keys.join('');
    } else {
      const keys = [...record.keys()];
      keys.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
      ans += keys.join('');
    }
    isEven = !isEven;
    for (const [key, value] of record.entries()) {
      if (value === 1) {
        record.delete(key);
      } else {
        record.set(key, value - 1);
      }
    }
  }

  return ans;
}