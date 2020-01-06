/**
 * https://leetcode-cn.com/problems/next-greater-element-i/
 * 
 * 496. 下一个更大元素 I
 * 
 * Easy
 * 
 * O(m+n)
 * 
 * 60ms 95.47%
 * 35.9mb 37.31%
 */
const nextGreaterElement = (num1, num2) => {
  const record = new Map();
  const stack = [];
  for (let i = 0, max = num2.length; i < max; i++) {
    const num = num2[i];
    while (stack.length && num > stack[stack.length - 1]) {
      record.set(stack.pop(), num);
    }
    stack.push(num);
  }

  // 没有最大的情况
  while (stack.length) {
    record.set(stack.pop(), -1);
  }

  const ans = [];
  for (let i = 0, max = num1.length; i < max; i++) {
    ans.push(record.get(num1[i]));
  }
  return ans;
}