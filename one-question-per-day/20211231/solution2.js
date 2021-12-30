var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }

    let sum = 1;
    let i = 2;
    const sqrt = Math.sqrt(num);
    for (;i < sqrt; i++) {
        if (num % i === 0) {
            sum += i;
            sum += num / i;
        }
    }

    if (i * i === num) {
        sum += i;
    }
    return sum === num;
};