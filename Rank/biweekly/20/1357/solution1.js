/**
 * https://leetcode-cn.com/problems/apply-discount-every-n-orders/
 * 
 * 1357. 每隔 n 个顾客打折
 * 
 * Medium
 * 
 * 276ms 100.00%
 * 
 * 56.8mb 100.00%
 */

const Cashier = function(n, discount, products, prices) {
  Object.assign(this, {
    n,
    discount,
    products,
    prices,
    currentCount: 0
  })
};

Cashier.prototype.getBill = function(product, amount) {
  // 计算折扣
  let discount = 0;
  this.currentCount++;
  if (this.n === this.currentCount) {
    discount = this.discount;
    this.currentCount = 0;
  }

  // 计算总结额
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    const item = this.prices[this.products.findIndex(item => item === product[i])];
    const count = amount[i];
    total += item * count;
  }

  return (total - (discount * total) / 100);
};