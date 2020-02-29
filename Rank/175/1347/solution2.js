/**
 * https://leetcode-cn.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
 * 
 * 1347. 制造字母异位词的最小步骤数
 * 
 * Medium
 * 
 * 考察点：
 *  - 哈希表
 * 17ms 43.33%
 * 
 * 76ms 100.000%
 * 
 * 41.7mb 100.00%
 * 
 */

const A_CODE = 'a'.charCodeAt(0);
const minSteps = (s, t) => {
  const max = s.length;
  const record = new Array(26).fill(0);

  for (let i = 0; i < max; i++) {
    ++record[s[i].charCodeAt(0) - A_CODE];
    --record[t[i].charCodeAt(0) - A_CODE];
  }
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    if (record[i] > 0) {
      ans += record[i];
    }
  }
  return ans;
}