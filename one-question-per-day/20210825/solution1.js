/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const ans = [];
  const stack = [0];
  function dfs(graph, index, size) {
    if (index === size) {
      ans.push([...stack]);
      return;
    }
    for (const item of graph[index]) {
      stack.push(item);
      dfs(graph, item, size);
      // 重置
      stack.pop();
    }
  }

  dfs(graph, 0, graph.length - 1);

  return ans;
};