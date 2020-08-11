// 第一种解法
const minCost = function(n, cuts) {
  const cache = new Map();
  return help(0, n, cache);

  function help(left, right, cache) {
    const cacheKey = `${left}-${right}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < cuts.length; i++) {
      if (cuts[i] > left && cuts[i] < right) {
        let cost = help(left, cuts[i], cache) + help(cuts[i], right, cache);
        min = Math.min(min, cost);
      }
    }
    if (min === Number.MAX_SAFE_INTEGER) {
      min = 0
    } else {
      min += right - left;
    }
    cache.set(cacheKey, min);
    return min;
  }
};

// 第二种解法
const minCost = function(n, cuts) {
  const record = new Map();
  cuts.sort((a, b) => a - b);
  cuts.unshift(0);
  cuts.push(n);
  const maxIndex = cuts.length - 1;
  return help(0, maxIndex, cuts, record);
};

function help(leftIndex, rightIndex, cuts, record) {
  const cacheKey = `${leftIndex}-${rightIndex}`
  if (record.has(cacheKey)) {
    return record.get(cacheKey);
  }
  const left = cuts[leftIndex];
  const right = cuts[rightIndex];

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = leftIndex + 1; i < rightIndex; i++) {
    const cost = help(leftIndex, i, cuts, record) + help(i, rightIndex, cuts, record);
    min = Math.min(cost, min);
  }

  if (min === Number.MAX_SAFE_INTEGER) {
    min = 0;
  } else {
    min += right - left;
  }
  record.set(cacheKey, min);
  return min;
}