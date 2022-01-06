
const replaceStr = (pre, next) => {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== pre && str[i] !== next) {
            return str[i];
        }
    }
}
const modifyString = function(s) {
    const ans = s.split('');

    for (let i = 0; i < ans.length; i++) {
        if (ans[i] === '?') {
            // 进行替换操作
            ans[i] = replaceStr(ans[i - 1], ans[i + 1]);
        }
    }

    return ans.join('');
};