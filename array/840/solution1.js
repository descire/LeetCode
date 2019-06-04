  /**
   * https://leetcode.com/problems/magic-squares-in-grid/
   * 
   * 840. Magic Squares In Grid
   * 
   * Easy
   * 
   * 52ms 97.30%
   * 35.5MB 53.49%
   */
  const numMagicSquaresInside = grid => {
    const rows = grid.length
    const cols = grid[0].length

    let ans = 0

    for (let row = 0; row < rows - 2; row++) {
      for (let col = 0; col < cols - 2; col++) {
        if (isMagic(grid, row, col)) {
          ans++
        }
      }
    }
    return ans
  }

  function isMagic(grid, row, col) {
    const x1 = grid[row][col]
    const x2 = grid[row][col + 1]
    const x3 = grid[row][col + 2]
    const y1 = grid[row + 1][col]
    const y2 = grid[row + 1][col + 1]
    const y3 = grid[row + 1][col + 2]
    const z1 = grid[row + 2][col]
    const z2 = grid[row + 2][col + 1]
    const z3 = grid[row + 2][col + 2]
    const arr = [x1, x2, x3, y1, y2, y3, z1, z2, z3]

    if (arr.some(item => item > 9 || item < 1)) {
      return false
    }

    const s = new Set()
    arr.forEach(item => s.add(item))
    if (s.size !== 9) {
      return false
    }

    const a = x1 + x2 + x3
    const b = y1 + y2 + y3
    const c = z1 + z2 + z3
    const a1 = x1 + y1 + z1
    const b1 = x2 + y2 + z2
    const c1 = x3 + y3 + z3
    const a2 = x1 + y2 + z3
    const b2 = x3 + y2 + z1

    return (a === b && a === c && a === a1 && a === b1 && a === c1 && a === a2 && a === b2)
  }