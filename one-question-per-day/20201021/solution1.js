/**
 * 双指针
 * 时间复杂度 O(n + m)
 * 空间复杂度 O(1)
 */
const isLongPressedName = function(name, typed) {
  let x = 0;
  let y = 0;
  const len1 = name.length;
  const len2 = typed.length;
  while (x < len1 || y < len2) {
    if (name[x] === typed[y]) {
      x++;
      y++;
    } else if (y > 0 && typed[y] === typed[y - 1]) {
      y++;
    } else {
      return false;
    }
  }

  return true;
};