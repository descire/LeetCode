/**
 * 
 * DFS
 */
const minDepth = function(root) {
  if (!root) {
    return 0;
  }

  let ans = 0;
  const queue = [root];
  while(queue.length) {
    let len = queue.length;
    while (--len) {
      const { left, right } = queue.shift();

      if (left === null && right === null) {
        return ans + 1;
      }

      if (left !== null) {
        queue.push(left);
      }

      if (right !== null) {
        queue.push(right);
      }
    }

    ans++;
  }

  return ans;
};