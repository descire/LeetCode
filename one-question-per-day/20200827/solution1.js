const findItinerary = function(tickets) {
  const record = new Map();

  // 建立链接表
  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    if (!record.has(from)) {
      record.set(from, []);
    }
    record.get(from).push(to);
  }

  // 排序
  for (let list of record.values()) {
    list.sort();
  }

  
  function dfs(city, used) {
    if (used === tickets.length) {
      return true;
    }

    const nextCities = record.get(city);

    if (!nextCities || nextCities.length === 0) {
      return false;
    }

    for (let i = 0; i < nextCities.length; i++) {
      const nextCity = nextCities[i];
      nextCities.splice(i, 1);
      ans.push(nextCity);
      if (dfs(nextCity, used + 1)) {
        return true;
      } else {
        // 不满足要求状态回滚
        ans.pop();
        nextCities.splice(i, 0, nextCity);
      }
    }
  }

  const ans = ['JFK'];
  dfs('JFK', 0);
  return ans;
};