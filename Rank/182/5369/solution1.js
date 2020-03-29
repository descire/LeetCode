/**
 * https://leetcode-cn.com/problems/count-number-of-teams/
 * 
 * 5369. 统计作战单位数
 * 
 * Medium
 */
const numTeams = rating => {
  let ans = 0;
  const max = rating.length;
  for (let i = 0; i < max; i++) {
    for (let j = i + 1; j < max; j++) {
      for (let k = j + 1; k < max; k++) {
        if (rating[i] < rating[j] && rating[j] < rating[k]) {
          ans++;
        }

        if (rating[i] > rating[j] && rating[j] > rating[k]) {
          ans++;
        }
      }
    }
  }

  return ans;
}