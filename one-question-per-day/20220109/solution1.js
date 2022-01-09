/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {*} releaseTimes 
 * @param {*} keysPressed 
 * @returns 
 */
const slowestKey = function(releaseTimes, keysPressed) {
    let ans = keysPressed[0];
    let max = releaseTimes[0];

    for (let i = 1; i < releaseTimes.length; i++) {
        const time = releaseTimes[i] - releaseTimes[i - 1];
        const key = keysPressed[i];

        if (time > max || (time === max && key > ans)) {
            ans = key;
            max = time;
        }
    }

    return ans;
};