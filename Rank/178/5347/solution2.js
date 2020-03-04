/**
 * https://leetcode-cn.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * 
 * 1368. 使网格图至少有一条有效路径的最小代价
 * 
 * Hard
 * 
 * 124ms 82.35%
 * 49.4mb 100.00%
 * 
 * 
 * 时间复杂度 O(mn)
*/

const changeDistance = [
  [0, 1], // 向右
  [0, -1], // 向左
  [1, 0], // 向下
  [-1, 0] // 向上
]
const minCost = grid => {
  const x = grid.length;
  const y = grid[0].length;

  const queue = new Deque([0, 0, 0])

  const visited = new Set();

  while(queue.length) {
    const first = queue.pop_front().val;
    const [cost, x1, y1] = first;
    if (visited.has(`${x1}-${y1}`)) {
      // 过滤已经访问过的点
      continue;
    }

    visited.add(`${x1}-${y1}`);

    if (x1 === x - 1 && y1 === y - 1)  {
      return cost;
    }

    // 尝试四个方向
    for (let i = 0; i < 4; i++) {
      const nx = x1 + changeDistance[i][0];
      const ny = y1 + changeDistance[i][1];
      if (nx < 0 || ny < 0 || nx >= x || ny >= y) {
        continue;
      }
      if (grid[x1][y1] === i + 1) {
        queue.push_front([cost, nx, ny]);
      } else {
        queue.push_back([cost + 1, nx, ny]);
      }
    }
  }
  return 0;
}
// 基于单链表模拟双端队列
function Deque(value) {
  const initialNode = new Node(value);
  this.head = initialNode;
  this.tail = initialNode;
  this.length = 1;
}

Deque.prototype.pop_front = function () {
  const item = this.head;
  if (this.length === 1) {
    this.tail = null;
  }
  this.head = this.head.next;
  this.length -= 1;
  return item;
}

Deque.prototype.push_front = function (value) {
  const newNode = new Node(value);
  if (!this.length) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    const currentHead = this.head;
    newNode.next = currentHead;
    this.head = newNode;
  }

  this.length += 1;
}

Deque.prototype.push_back = function (value) {
  const newNode = new Node(value);
  if (!this.length) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    const currentTail = this.tail;
    currentTail.next = newNode;
    this.tail = newNode;
  }

  this.length += 1;
}

function Node(value) {
  this.val = value;
  this.next = null;
}