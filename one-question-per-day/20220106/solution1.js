/**
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {*} path 
 * @returns 
 */
const simplifyPath = function(path) {
    const paths = path.split('/');
    const stack = [];
    for (const name of paths) {
        if (name === '..' && stack.length) {
            stack.pop();
        } else if (name.length && name !== '.' && name !== '..') {
            stack.push(name);
        }
    }

    return '/' + stack.join('/');
};