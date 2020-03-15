/**
 * https://leetcode-cn.com/problems/time-needed-to-inform-all-employees/
 * 
 * 1376. 通知所有员工所需的时间
 * 
 * Medium
 * 
 * 348ms 71.62%
 * 108.3mb 100.00%
 */
const numOfMinutes = (n, headID, manager, informTime) => {
  const record = new Map();
  for (let i = 0; i < n; i++) {
    if (!record.get(manager[i])) {
      record.set(manager[i], []);
    }
    record.get(manager[i]).push(i);
  }

  return dfs(manager[headID], record, informTime);
}

function dfs(startIndex, record, informTime) {
  if (record.get(startIndex) === undefined) {
    return 0;
  }
  const indexsList = record.get(startIndex);
  let sum = 0;
  for (let i = 0, len = indexsList.length; i < len; i++) {
    const subSum = dfs(indexsList[i], record, informTime);
    sum = Math.max(sum, informTime[indexsList[i]] + subSum);
  }
  return sum;
}