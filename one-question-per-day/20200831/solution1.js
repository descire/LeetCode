/**
 * 深度优先遍历
 * 时间复杂度 O(n + m)
 * 空间复杂度 O(n)
 */
const canVisitAllRooms = function(rooms) {
  const record = new Set();
  const roomLength = rooms.length;
  dfs(0);

  return roomLength === record.size;
  function dfs(startIndex) {
    if (record.has(startIndex)) {
      return;
    }
    record.add(startIndex);
    const room = rooms[startIndex];
    for (let i = 0; i < room.length; i++) {
      dfs(room[i]);
    }
  }
};