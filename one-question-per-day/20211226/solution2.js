const findOcurrences = function(text, first, second) {
    const ans = [];
    const textList = text.split(' ');
    for (let i = 0; i <= textList.length - 3; i++) {
        if (textList[i] === first && textList[i + 1] === second) {
            ans.push(textList[i + 2]);
        }
    }

    return ans;
};