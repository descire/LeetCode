/**
 * https://leetcode-cn.com/problems/design-underground-system/submissions/
 * 
 * Medium
 * 
 * 5370. 设计地铁系统
 * 
 * 300ms 100.00%
 * 59.3mb 100.00%
 */
var UndergroundSystem = function() {
  this.record = new Map();
  this.resultMap = new Map();
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.record.set(id, [stationName, t]);
};

UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const [startStation, startT] = this.record.get(id);
  const time = t - startT;
  if (!this.resultMap.has(`${startStation}-${stationName}`)) {
    this.resultMap.set(`${startStation}-${stationName}`, []);
  }
  this.resultMap.get(`${startStation}-${stationName}`).push(time);
  this.record.delete(id);
};
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const list = this.resultMap.get(`${startStation}-${endStation}`);
  const max = list.length;
  return list.reduce((a, b) => a + b, 0) / max;
};