/**
 * 考察数据结构  栈
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const makeGood = function(s) {
  const stack = [];
  let startIndex = 0;
  while (startIndex < s.length) {
    const currentItem = s[startIndex];
    if (stack.length && Math.abs(currentItem.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
      stack.pop();
    } else {
      stack.push(currentItem);
    }
    startIndex++;
  }

  return stack.join('');
};