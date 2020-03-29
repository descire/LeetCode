/**
 * https://leetcode-cn.com/problems/count-number-of-teams/
 * 
 * 5369. 统计作战单位数
 * 
 * Medium
 * 
 * 64ms 100.00%
 * 34.2mb 100.00%
 */
const numTeams = rating => {
  let ans = 0;
  const max = rating.length;
  for (let i = 1; i < max; i++) {
    const middle = rating[i];
    let c1 = i - 1;
    let maxCount1 = 0;
    let minCount1 = 0;
    while (c1 >= 0) {
      if (rating[c1] < middle) {
        minCount1++;
      } else if (rating[c1] > middle) {
        maxCount1++;
      }
      c1--;
    }

    let c2 = i + 1;
    let maxCount2 = 0;
    let minCount2 = 0;
    while (c2 < max) {
      if (rating[c2] < middle) {
        minCount2++;
      } else if (rating[c2] > middle) {
        maxCount2++;
      }
      c2++;
    }
    ans += (minCount1 * maxCount2) + (maxCount1 * minCount2);
  }
  return ans;
}