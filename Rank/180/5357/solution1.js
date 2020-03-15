/**
 * https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * 
 * 5357. 设计一个支持增量操作的栈
 * 
 * Medium
 * 
 * 196ms 100.00%
 * 41.4mb 100.00%
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.ans = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.ans.length < this.maxSize) {
    this.ans.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.ans.length !== 0) {
    return this.ans.pop();
  }
  return -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < k; i++) {
    if (this.ans[i] !== undefined) {
      this.ans[i] += val;
    }
  }
};