/**
 * 有限状态机
 */
const isNumber = function(s) {
  const s1 = new Map();
  s1.set(' ', 0);
  s1.set('s', 1);
  s1.set('d', 2);
  s1.set('.', 4);
  const s2 = new Map();
  s2.set('d', 2);
  s2.set('.', 4);
  const s3 = new Map();
  s3.set('d', 2);
  s3.set('.', 3);
  s3.set('e', 5);
  s3.set(' ', 8);
  const s4 = new Map();
  s4.set('d', 3);
  s4.set('e', 5);
  s4.set(' ', 8);
  const s5 = new Map();
  s5.set('d', 3);
  const s6 = new Map();
  s6.set('s', 6);
  s6.set('d', 7);
  const s7 = new Map();
  s7.set('d', 7);
  const s8 = new Map();
  s8.set('d', 7);
  s8.set(' ', 8);
  const s9 = new Map();
  s9.set(' ', 8);

  const states = [
    s1,s2,s3,s4,s5,s6,s7,s8,s9
  ];
  let p = 0;
  let t;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= '0' && char <= '9') {
      t = 'd';
    } else if (char === '+' || char === '-') {
      t = 's';
    } else if (char === 'e' || char === 'E') {
      t = 'e';
    } else if (char === '.' || char === ' ') {
      t = char;
    } else {
      t = '?';
    }

    if (!states[p].has(t)) {
      return false;
    }
    p = states[p].get(t);
  }

  return p === 2 || p === 3 || p === 7 || p === 8;
};