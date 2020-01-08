/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 
 * 20. 有效的括号
 * 
 * Easy
 * 
 * 52ms 99.24%
 * 35.4mb 23.61%
 */
const isValid = s => {
  const stack = [];
  for (let i = 0, max = s.length; i < max; i++) {
    const stackIndex = stack.length - 1;
    if (
      (s[i] === ')' && stack[stackIndex] === '(') ||
      (s[i] === '}' && stack[stackIndex] === '{') ||
      (s[i] === ']' && stack[stackIndex] === '[')
    ) {
      stack.pop();
      continue;
    } else if (
      (s[i] === ')' && (stack[stackIndex] === '{' || stack[stackIndex] === '[')) ||
      (s[i] === '}' && (stack[stackIndex] === '(' || stack[stackIndex] === '[')) ||
      (s[i] === ']' && (stack[stackIndex] === '{' || stack[stackIndex] === '('))
    ) {
      return false;
    }
    stack.push(s[i]);
  }
  return stack.length === 0;
}