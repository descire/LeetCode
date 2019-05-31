  /**
   * https://leetcode.com/problems/positions-of-large-groups/
   * 
   * 830. Positions of Large Groups
   * 
   * Easy
   * 
   * 76ms 74.90%
   * 36.8mb 65.93%
   */
  const largeGroupPositions = S => {
    const len = S.length
    const ans = []
    if (len === 0) {
      return ans
    }

    let startIndex = 0

    let pre = S[0]
    
    for (let i = 1; i <= len; i++) {
      // 小技巧 避免丢失最后的处理 例如： 'aaaa'
      const s = S[i]
      if (pre !== s) {
        const distance = i - startIndex
        if (distance >= 3) {
          ans.push([startIndex, i - 1])
        }
        startIndex = i
        pre = s
      }
    }
    return ans
  }