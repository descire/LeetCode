const list = ['a', 'e', 'i', 'o', 'u']
const findTheLongestSubstring = s => {
  const record = new Map();
  for (let i = 0, max = s.length; i < max; i++) {
    if (list.includes(s[i])) {
      if (!record.has(s[i])) {
        record.set(s[i], 0);
      }
      record.set(s[i], record.get(s[i]) + 1);
    }
  }

  while () {

  }
}