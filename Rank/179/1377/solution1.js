  /**
   * https://leetcode-cn.com/problems/frog-position-after-t-seconds/
   * 
   * 1377. T 秒后青蛙的位置
   * 
   * Hard
   * 
   * 76ms 87.80%
   * 37.9mb 100.00%
   */
  const frogPosition = (n, edges, t, target) => {
    if (!edges.length) {
      return 1.0;
    }
    const record = new Map();
    for (let i = 0; i < edges.length; i++) {
      if (!record.has(edges[i][0])) {
        record.set(edges[i][0], []);
      }
      // 避免重新记录
      if (edges[i][1] > edges[i][0]) {
        record.get(edges[i][0]).push(edges[i][1]);
      }
      
      if (!record.has(edges[i][1])) {
        record.set(edges[i][1], []);
      }
      if (edges[i][0] > edges[i][1]) {
        record.get(edges[i][1]).push(edges[i][0]);
      }
    }

    let ans = 0;

    dfs(1, record, t, target, 1);

    return ans;

    function dfs(startIndex, record, t, target, current) {
      const indexsList = record.get(startIndex);
      if (target === startIndex && ( t === 0 || (t > 0 && !indexsList.length))) {
        ans = current;
        return
      }
      if (t === 0 || !indexsList.length) {
        return
      }
      for (let i = 0, max = indexsList.length; i < max; i++) {
        dfs(indexsList[i], record, t - 1, target, current * (1 / max));
      }
    }
  }