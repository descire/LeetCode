/**
 * 队列
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
const connect = function(root) {
  const queue = [root];
  while(queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      if (item) {
        // 末尾的特殊情况
        if (i === size - 1) {
          item.next = null;
        } else {
          item.next = queue[0];
        }
        item.left && queue.push(item.left);
        item.right && queue.push(item.right);
      }
    }
  }

  return root;
};