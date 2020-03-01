/**
 * https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * 
 * 5344. 有多少小于当前数字的数字
 * 
 * Easy
 * 
 * 96ms 100.00%
 * 35.6mb 100.00%
 */
const smallerNumbersThanCurrent = nums => {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < item) {
        count++;
      }
    }
    ans.push(count);
  }
  return ans;
}