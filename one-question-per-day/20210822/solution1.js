/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
 var escapeGhosts = function(ghosts, target) {
  const distance = minDistance([0, 0], target);
  for (const ghost of ghosts) {
    if (minDistance(ghost, target) <= distance) {
      return false;
    }
  }

  return true;

  function minDistance(start, end) {
    return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
  }
};