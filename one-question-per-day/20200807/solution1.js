var isSameTree = function(p, q) {
    const x = [];
    const y = [];
    dfs(p, x);
    dfs(q, y);
    const xlen = x.length;
    const ylen = y.length;
    if (xlen !== ylen) {
      return false;
    }
    for (let i = 0; i < xlen; i++) {
      if (x[i] !== y[i]) {
        return false;
      }
    }
    return true;
};

function dfs(root, record){ 
  if (!root) {
    record.push(null);
    return;
  }
  record.push(root.val);
  dfs(root.left, record);
  dfs(root.right, record);
}