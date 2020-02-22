const numberOfSubstrings = s => {
  const max = s.length;
  if (!s) {
    return 0;
  }

  const record = new Map();
  record.set('a', 0);
  record.set('b', 0);
  record.set('c', 0);

  computedCount(record, s[0], true);

  let p1 = 0;
  let p2 = 0;

  let isForward = true;

  let ans = 0;
  while(p1 <= p2 && p2 < max) {
    if (isForward) {
      p2++;
      computedCount(record, s[p2], true);
      if (isValid(record)) {
        // 如果当前字符串合法，则移动左指针
        ans += max - p2;
        isForward = false;
      }
    } else {
      computedCount(record, s[p1]);
      p1++;
      if (isValid(record)) {
        ans += max - p2;
      } else {
        // 如果当前字符串不合法，则移动右指针
        isForward = true;
      }
    }
  }

  return ans;
}

function computedCount(record, str, increase) {
  if (increase) {
    record.set(str, record.get(str) + 1);
  } else {
    record.set(str, record.get(str) - 1);
  }
}

function isValid(record) {
  return (record.get('a') && record.get('b') && record.get('c'));
}