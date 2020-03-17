/**
 * https://leetcode-cn.com/problems/maximum-performance-of-a-team/
 * 
 * 5359. 最大的团队表现值
 * 
 * Hard
 * 
 * 1、堆 实现优先队列
 * 2、BigInt
 * 
 * 360ms 100.00%;
 * 60.4mb 100.00%
 */
const maxPerformance = (n, speed, efficiency, k) => {
  let list = efficiency.map((item, index) => [item, speed[index]]);
  list.sort((a, b) => b[0] - a[0]);
  
  let pq = new PriorityQueue();
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const currentEfficiency = list[i][0];
    if (pq.heap.length === k) {
      sum -= pq.pop_first();
    }
    sum = BigInt(sum) + BigInt(list[i][1]);
    pq.push_first(BigInt(list[i][1]));
    const temp = BigInt(currentEfficiency) * BigInt(sum);
    if (temp > ans) {
      ans = temp;
    }
  }

  return ans % 1000000007n;
}

function PriorityQueue() {
  this.heap = [];
}

PriorityQueue.prototype.heapify = function (arr, n, index, isDown) {
  if (index >= n) {
    return;
  }
  const c1 = index * 2 + 1;
  const c2 = index * 2 + 2;
  let minIndex = index;
  if (c1 < n && arr[c1] < arr[minIndex]) {
    minIndex = c1;
  }
  if (c2 < n && arr[c2] < arr[minIndex]) {
    minIndex = c2;
  }

  if (minIndex !== index) {
    [arr[minIndex], arr[index]] = [arr[index], arr[minIndex]];
    const nextIndex = isDown ? minIndex : Math.floor((index - 1) / 2);
    this.heapify(arr, n, nextIndex, isDown);
  }
}

PriorityQueue.prototype.pop_first = function () {
  const min = this.heap[0];
  const n = this.heap.length;
  this.heap[0] = this.heap[n - 1];
  this.heap.pop();
  this.heapify(this.heap, n, 0, true);
  return min;
}

PriorityQueue.prototype.push_first = function (value) {
  this.heap.push(value);
  const n = this.heap.length;
  this.heapify(this.heap, n, Math.floor((n - 2) / 2), false);
}