const findOcurrences = function(text, first, second) {
    const ans = [];
    const textList = text.split(' ');
    let start = 0;
    let max = textList.length - 3;
    while (start <= max) {
        if (textList[start] === first && textList[start + 1] === second) {
            ans.push(textList[start + 2]);
        }
        start++;
    }

    return ans;
};