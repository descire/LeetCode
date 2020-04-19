/**
 * https://leetcode-cn.com/problems/reformat-the-string/
 * 
 * 重新格式化字符串
 * 
 * Easy
 * 
 * 时间复杂度 O(n)
 * 
 * 空间复杂度 O(n)
 */
const reformat = s => {
  const digitList = [];
  const letterList = [];
  for (let i = 0; i < s.length; i++) {
    if (Number.parseInt(s[i]) == s[i]) {
      digitList.push(s[i]);
    } else {
      letterList.push(s[i]);
    }
  }

  const digitCount = digitList.length;
  const letterCount = letterList.length;
  if (Math.abs(digitCount - letterCount) > 1) {
    return '';
  }
  if (digitCount > letterCount) {
    return digitList.reduce((a, b, index) => a + b + (letterList[index] || ''), '');
  } else {
    return letterList.reduce((a, b, index) => a + b + (digitList[index] || ''), '');
  }
}