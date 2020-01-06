/**
 * https://leetcode-cn.com/problems/next-greater-element-i/
 * 
 * 496. 下一个更大元素 I
 * 
 * Easy
 * 
 * 72ms 77.24%
 * 34.9mb 79.10%
 * 
 * O(n*m)
 */
const nextGreaterElement = (num1, num2) => {
  const ans = [];
  for (let i = 0, max = num1.length; i < max; i++) {
    const num = num1[i];
    ans[i] = -1;
    let index = num2.length - 1;
    while (index && num2[index] !== num) {
      if (num2[index] > num) {
        ans[i] = num2[index];
      }
      index--;
    }
  }
  return ans;
}