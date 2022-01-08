const maxDepth = function(s) {
    const stack = [];
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            ans = Math.max(ans, stack.length);
        } else if (s[i] === ')' && stack.length) {
            stack.pop();
        }
    }
    return ans;
};