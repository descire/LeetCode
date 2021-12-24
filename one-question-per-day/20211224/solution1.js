var eatenApples = function (apples, days) {
    let res = 0, minDay = days[0] - 1;
    const freshArr = new Array(days.length).fill(0);
    for (let i = 0; i < freshArr.length; i++) {
        if (i < days.length && days[i] > 0) {
            freshArr[i + days[i] - 1] = (freshArr[i + days[i] - 1] || 0) + apples[i];
            minDay = Math.min(minDay, i + days[i] - 1);
        }
        minDay = Math.max(minDay, i);
        while (minDay < freshArr.length && !freshArr[minDay]) minDay++;
        if (freshArr[minDay]) res++, freshArr[minDay]--;
    }
    return res;
};
