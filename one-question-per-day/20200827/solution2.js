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
  const ans = [];

  function dfs(node) {
    const nextCities = record.get(node);
    while (nextCities && nextCities.length) {
      const next = nextCities.shift();
      dfs(next);
    }

    ans.unshift(node);
  }

  dfs('JFK');

  return ans;
};