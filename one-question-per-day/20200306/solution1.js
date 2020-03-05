/**
 * https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
 * 
 * 
 * 面试题57 - II. 和为s的连续正数序列
 * 
 * Easy
 * 
 * 76ms 59.72%
 * 37mb 100.00%
 */
const findContinuousSequence = target => {
  let ans = [];

  for (let i = 1; i <= Math.floor(target / 2); i++) {
    let currentSum = i;
    let temp = i + 1;
    const sub = [i];
    while(currentSum < target) {
      sub.push(temp);
      currentSum += temp;
      temp++;
    }
    if (currentSum === target) {
      ans.push(sub);
    }
  }

  return ans;
}