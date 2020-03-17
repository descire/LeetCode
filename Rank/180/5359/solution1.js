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
 * 364ms 100.00%;
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

PriorityQueue.prototype.heapify_down = function (arr, n, index) {
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
    this.heapify_down(arr, n, minIndex);
  }
}

PriorityQueue.prototype.heapify_up = function (arr, n, index) {
  if (index < 0) {
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
    this.heapify_up(arr, n, Math.floor((index - 1) / 2));
  }
}

PriorityQueue.prototype.pop_first = function () {
  const min = this.heap[0];
  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap.pop();
  this.heapify_down(this.heap, this.heap.length, 0);
  return min;
}

PriorityQueue.prototype.push_first = function (value) {
  this.heap.push(value);
  this.heapify_up(this.heap, this.heap.length, Math.floor((this.heap.length - 2) / 2));
}