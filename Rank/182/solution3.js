
var UndergroundSystem = function() {
  this.inMap = new Map();
  this.resultMap = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.inMap.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const [startStation, startT] = this.inMap.get(id);
  const time = t - startT;
  if (!this.resultMap.has(`${startStation}-${stationName}`)) {
    this.resultMap.set(`${startStation}-${stationName}`, []);
  }
  this.resultMap.get(`${startStation}-${stationName}`).push(time);
  this.inMap.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const list = this.resultMap.get(`${startStation}-${endStation}`);
  const max = list.length;
  return list.reduce((a, b) => a + b, 0) / max;
};