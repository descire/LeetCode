/**
 * https://leetcode-cn.com/problems/longest-palindrome/
 * 
 * 409. 最长回文串
 * 
 * Easy
 * 
 * 60ms 97.57%
 * 35.4mb 84.78%
 */
const longestPalindrome = s => {
  let ans = 0;
  const record = new Map();
  const max = s.length
  for (let i = 0; i < max; i++) {
    if (!record.has(s[i])) {
      record.set(s[i], 0);
    }
    record.set(s[i], record.get(s[i]) + 1);
  }

  for (const value of record.values()) {
    if (value % 2 === 0) {
      ans += value;
    } else {
      ans += value - 1;
    }
  }
  if (ans < max) {
    return ans + 1;
  }
  return ans;
}