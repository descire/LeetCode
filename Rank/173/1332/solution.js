/**
 * https://leetcode-cn.com/problems/remove-palindromic-subsequences/
 * 
 * 1332. 删除回文子序列
 * 
 * Easy
 * 
 * 56ms 84.21%
 * 34.2mb 100.00%
 */
const removePalindromeSub = s => {
  if (!s) {
    return 0;
  }

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return 2;
    } else {
      start++;
      end--;
    }
  }

  return 1;
}