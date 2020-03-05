/**
 * https://leetcode-cn.com/problems/distribute-candies-to-people/
 * 
 * 1103. 分糖果 II
 * 
 * Easy
 * 
 * 56ms 95.04%
 * 34.7mb 26.23%
 */
const distributeCandies = (candies, num_people) => {
  let ans = Array(num_people).fill(0);

  let count = 0;
  while(candies) {
    // 确定下标
    const startIndex = count % num_people;

    // 得出能够分配多少个
    const allocationCount = Math.min(count + 1, candies);
    ans[startIndex] += allocationCount;
    candies -= allocationCount;
    count++;
  }

  return ans;
}