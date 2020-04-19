/**
 * 
 * https://leetcode-cn.com/problems/display-table-of-food-orders-in-a-restaurant/
 * 
 * 点菜展示表
 * 
 * Medium
 * 
 * 时间复杂度 O(n^2)
 * 
 * 空间复杂度 O(n^2)
 */
const displayTable = orders => {
  const foodRecord = new Set();
  const tableRecord = new Set();
  const record = new Map();

  for (let i = 0; i < orders.length; i++) {
    const [_, tablenumber, fooditem] = orders[i];
    foodRecord.add(fooditem);
    tableRecord.add(tablenumber);
    const key = `${tablenumber}${fooditem}`;
    if (!record.has(key)) {
      record.set(key, 0);
    }
    record.set(key, record.get(key) + 1);
  }
  const foods = Array.from(foodRecord.values());
  foods.sort();
  const tables = Array.from(tableRecord.values());
  tables.sort((a, b) => a - b);

  const ans = [];
  ans[0] = ['Table'];
  ans[0].push(...foods);
  for (let i = 0; i < tables.length; i++) {
    const temp = [tables[i]];
    const tablenumber = tables[i];
    for (let j = 0; j < foods.length; j++) {
      const food = foods[j];
      if (record.get(`${tablenumber}${food}`)) {
        temp.push(String(record.get(`${tablenumber}${food}`)));
      } else {
        temp.push('0')
      }
    }
    ans.push(temp);
  }

  return ans;
}