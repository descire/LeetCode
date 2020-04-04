const countLargestGroup = n => {
  const record = new Map();
  for (let i = 1; i <= n; i++) {
    const item = String(i).split('');
    const sum = item.reduce((a, b) => Number.parseInt(a) + Number.parseInt(b), 0);
    if (!record.has(sum)) {
      record.set(sum, 0);
    }
    record.set(sum, record.get(sum) + 1);
  }

  let ans = 0;
  for (const count of record.values()) {
    ans = Math.max(count, ans);
  }

  let some = 0;
  for (const count of record.values()) {
    if (count === ans) {
      some++;
    }
  }

  return some;
}