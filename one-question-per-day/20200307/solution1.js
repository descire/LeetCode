/**
 * https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
 * 
 * 面试题59 - II. 队列的最大值
 * 
 * Medium
 * 
 * 288 73.47%
 * 67.1mb 100.00%
 */
const MaxQueue = function() {
  this.queue = [];
}

MaxQueue.prototype.max_value = function() {
  if (!this.queue.length) {
    return -1;
  }
  return Math.max(...this.queue);
}

MaxQueue.prototype.push_back = function(value) {
  this.queue.push(value);
}

MaxQueue.prototype.pop_front = function() {
  const front = this.queue.shift();
  if (front === undefined) {
    return -1;
  }
  return front;
}