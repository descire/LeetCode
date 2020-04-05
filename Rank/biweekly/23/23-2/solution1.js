/**
 * https://leetcode-cn.com/problems/construct-k-palindrome-strings/submissions/
 * 
 * 构造 K 个回文字符串
 * 
 * Medium
 * 
 * 132ms
 */
const canConstruct = (s, k) => {
  const max = s.length;

  if (k > max) {
    return false;
  }

  const record = new Map();

  for (let i = 0; i < max; i++) {
    const item = s[i];
    if (!record.has(item)) {
      record.set(item, 0);
    }
    record.set(item, record.get(item) + 1);
  }

  let odd = 0;
  for (const count of record.values()) {
    if (count % 2 === 1) {
      odd++;
    }
  }

  return k >= odd;
}