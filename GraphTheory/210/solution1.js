/**
 * 拓扑排序
 * 
 * 96ms 36.21%
 * 42.5mb 11.11%
 * 
 * 时间复杂度 O(n+m)
 * 空间复杂度 O(n+m)
 */
const findOrder = function(numCourses, prerequisites) {
  const edges = new Map();
  const flags = Array(numCourses).fill(0); // 0 未访问 1 当前正在访问 2 访问完成
  
  // 建立邻接表
  for (let [next, pre] of prerequisites) {
    if (!edges.has(pre)) {
      edges.set(pre, []);
    }
    edges.get(pre).push(next);
  }
  const stack = [];
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(edges, flags, i, stack)) {
      return [];
    }
  }
  const ans = [];
  for (let i = 0; i < numCourses; i++) {
    ans[i] = stack.pop();
  }
  return ans;


  function dfs(edgs, flags, index, stack) {
    if (flags[index] === 1) {
      return false;
    }
    if (flags[index] === 2) {
      return true;
    }
    flags[index] = 1;
    for (let nextIndex of edges.get(index) || []) {
      if (!dfs(edgs, flags, nextIndex, stack)) {
        return false;
      }
    }
    stack.push(index);
    flags[index] = 2;
    return true;
  }
};