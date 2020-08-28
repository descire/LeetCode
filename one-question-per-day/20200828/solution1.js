/**
 * 时间复杂度 O(N)
 * 空间复杂度 O(1)
 */
const deltaX = {
  "R": 1,
  "L": -1,
  "U": 0,
  "D": 0,
}

const deltaY = {
  "R": 0,
  "L": 0,
  "U": -1,
  "D": 1,
}

const judgeCircle = function(moves) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    x += deltaX[moves[i]];
    y += deltaY[moves[i]];
  }

  return (x === 0 && y === 0);
};