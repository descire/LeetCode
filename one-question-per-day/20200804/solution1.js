/**
 * 拓扑排序
 * 
 * 是一个有向无环图的所有顶点的线性序列
 * 
 * 93ms
 * 41.9mb
 * 
 * 时间复杂度 O(n+m)
 * 空间复杂度 O(n+m)
 */
const canFinish = function(numCourses, prerequisites) {
  const edges = new Map();
  const flags = Array(numCourses).fill(0); // 0 表示未访问 1 当前正在访问的 2 已经被访问过的不需要再访问
  // 构建邻接表
  for (let [next, pre] of prerequisites) {
    if (!edges.has(pre)) {
      edges.set(pre, []);
    }
    edges.get(pre).push(next)
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(edges, flags, i)) {
      return false;
    }
  }
  return true;

  function dfs(edges, flags, i) {
    if(flags[i] === 1) {
      return false;
    }
    if (flags[i] === 2) {
      return true;
    }
    flags[i] = 1;
    
    for (let next of edges.get(i) || []) {
      if (!dfs(edges, flags, next)) {
        return false;
      }
    }
    flags[i] = 2;
    return true;
  }
};