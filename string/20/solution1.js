/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
const isValid = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const item = s[i];
        if (item === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (item === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (item === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else {
            stack.push(item);
        }
    }

    return stack.length === 0;
};