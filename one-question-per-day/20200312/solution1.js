/**
 * https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/
 * 
 * 1071. 字符串的最大公因子
 * 
 * Easy
 * 
 * 56ms 97.98%
 * 36.9mb 6.25%
 */
const gcdOfStrings = (str1, str2) => {
  let ans = '';
  const len1 = str1.length;
  const len2 = str2.length;
  let currentStr = '';
  for (let i = 0; i < len2; i++) {
    currentStr += str2[i];
    if (len1 % (i + 1) !== 0 || len2 % (i + 1) !== 0) {
      continue;
    }

    if (currentStr.repeat(len2 / (i + 1)) === str2 && currentStr.repeat(len1 / (i + 1)) === str1) {
      ans = currentStr;
    }
  }
  return ans;
}