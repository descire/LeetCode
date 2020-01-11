/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
 * 
 * 703. 数据流中的第K大元素
 * 
 * Easy
 * 
 * 220ms 69.53%
 * 44.7mb 55.88%
 */
function KthLargest(k, nums) {
  this.tree = nums;
  this.k = k;
  this.sort(this.tree, this.tree.length);
}

KthLargest.prototype.add = function (val) {
  this.insert(val);
  return this.tree[this.tree.length - this.k];
}

KthLargest.prototype.insert = function(val) {
  for (let i = 0, max = this.tree.length; i < max; i++) {
    if (val < this.tree[i]) {
      this.tree.splice(i, 0, val);
      return;
    }
  }
  this.tree.push(val);
}

KthLargest.prototype.heapify = function(tree, n, i) {
  if (i > n) {
    return;
  }
  const c1 = 2 * i + 1;
  const c2 = 2 * i + 2;
  let max = i
  if (c1 < n && tree[c1] > tree[i]) {
    max = c1;
  }
  if (c2 < n && tree[c2] > tree[max]) {
    max = c2;
  }
  if (max !== i) {
    [tree[i], tree[max]] = [tree[max], tree[i]];
    this.heapify(tree, n, max);
  }
}

KthLargest.prototype.buildHeapTree = function(tree, n) {
  const lastNode = n - 1;
  const parentNode = Math.floor((lastNode - 1) / 2);
  for (let i = parentNode; i >= 0; i--) {
    this.heapify(tree, n, i);
  }
}

KthLargest.prototype.sort = function(tree, n) {
  this.buildHeapTree(tree, n);
  for (let i = n - 1; i > 0; i--) {
    [tree[i], tree[0]] = [tree[0], tree[i]];
    this.heapify(tree, i, 0);
  }
}
