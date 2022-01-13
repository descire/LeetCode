/**
 * 
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 * @param {*} nums 
 * @returns 
 */
 const dominantIndex = function(nums) {
    let sortNums = [...nums].sort((a,b) => a - b)
    // 唯一一个
    let res = nums.indexOf(sortNums[nums.length - 1])
    if(sortNums[nums.length-2] * 2 > sortNums[nums.length - 1]){
        res = -1
    }
    return res
};