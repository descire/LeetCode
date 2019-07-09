/**
 * https://leetcode-cn.com/problems/backspace-string-compare/
 * 
 * 844. 比较含退格的字符串
 * 
 * Easy
 * 
 * 
 */
var backspaceCompare = function (S, T) {
    let a = backspace(S);
    let b = backspace(T);
    return a === b;
};
function backspace(S) {
    let i = 0, j = -1, len = S.length;
    let arr = S.split('');
    let result = []
    while (i < len) {
        if (arr[i] == '#') {
            result.pop();
            j = j == -1 ? -1 : --j
        } else {
            j++;
            result[j] = arr[i];
        }
        i++
    }
    return result.join('')
}