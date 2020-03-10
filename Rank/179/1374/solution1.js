/**
 * https://leetcode-cn.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * 
 * 1374. 生成每种字符都是奇数个的字符串
 * 
 * Easy
 * 
 * 56ms 100.00%
 * 34.7mb 100.00%
 */

const generateTheString = n => {
  if (n % 2 === 0) {
    return Array(n - 1).fill('a').join('') + 'b';
  } else {
    return Array(n).fill('a').join('');
  }
}