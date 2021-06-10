const change = (amount, coins) => {
  const record = new Map();

  const backtrack = (amount, index) => {
    if (amount === 0) {
      return 1;
    }

    const cacheKey = `${amount}-${index}`;
    if (record.has(cacheKey)) {
      return record.get(cacheKey);
    }

    let count = 0;
    for (let i = index; i < coins.length; i++) {
      const coin = coins[i];
      if (amount >= coin) {
        count += backtrack(amount - coin, i);
      }
    }
    record.set(cacheKey, count);
    return count;
  }

  return backtrack(amount, 0);
}