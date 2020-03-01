/**
 * https://leetcode-cn.com/problems/rank-teams-by-votes/
 * 
 * 5345. 通过投票对团队排名
 * 
 * Medium
 * 
 * 88ms 100.00%
 * 37.6mb 100.00%
 */
const rankTeams = votes => {
  const record = new Map();

  for (let i = 0, max = votes.length; i < max; i++) {
    const item = votes[i];
    for (let j = 0, submax = item.length; j < submax; j++) {
      const sub = item[j];
      if (!record.has(sub)) {
        record.set(sub, Array(26).fill(0));
      }
      const temp = record.get(sub);
      temp[j]++;
    }
  }

  const list = Array.from(record.entries());

  list.sort((a, b) => {
    for (let i = 0; i < 26; i++) {
      if (a[1][i] !== b[1][i]) {
        return b[1][i] - a[1][i];
      }
    }
    return b[0] < a[0];
  })

  return list.map(item => item[0]).join('');
}