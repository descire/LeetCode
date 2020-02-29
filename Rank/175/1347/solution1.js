/**
 * https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * 
 * 1347. 制造字母异位词的最小步骤数
 * 
 * Medium
 * 
 * 考察点：
 *  - 哈希表
 * 
 * 172ms 43.33%
 * 40.9mb 100.00%
 */
const minSteps = (s, t) => {
  const record = new Map();
  
  for (let i = 0, max = s.length; i < max; i++) {
    if (!record.has(s[i])) {
      record.set(s[i], 0);
    }
    record.set(s[i], record.get(s[i]) + 1);

    if (!record.has(t[i])) {
      record.set(t[i], 0);
    }
    record.set(t[i], record.get(t[i]) - 1);
  }

  let ans = 0
  for (const count of record.values()) {
    if (count > 0) {
      ans += count;
    }
  }

  return ans;
}