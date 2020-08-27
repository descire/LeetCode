const findItinerary = function(tickets) {
  const record = new Map();

  for (let i = 0; i < tickets.length; i++) {
    const [from, to] = tickets[i];
    if (!record.has(from)) {
      record.set(from, []);
    }
    record.get(from).push(to);
  }

  const ans = ['JFK'];
  let queue = record.get('JFK');
  while (queue && queue.length) {
    queue.sort();
    const item = queue.shift();
    ans.push(item);
    queue = record.get(item);
  }

  return ans;
};