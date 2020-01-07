/**
 * https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * 
 * 1047. 删除字符串中的所有相邻重复项
 * 
 * easy
 * 88ms 73.21%
 * 42mb 100%
 */
const removeDuplicates = S => {
  const stack = [];
  for (let i = 0, max = S.length; i < max; i++) {
    const str = S[i];
    if (stack[stack.length - 1] === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.join('');
}