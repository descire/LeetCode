/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
 const levelOrder = root => {
    if (!root) {
      return [];
    }
  
    const ans = [];
    let queue = [root];
  
    while (queue.length) {
      const len = queue.length;
      const item = [];
      const _queue = [];
      for (let i = 0; i < len; i++) {
        const currentRoot = queue[i];
        item.push(currentRoot.val);
  
        currentRoot.left && _queue.push(currentRoot.left);
        currentRoot.right && _queue.push(currentRoot.right);
      }
      queue = _queue;
      ans.push(item);
    }
  
    return ans;
  }