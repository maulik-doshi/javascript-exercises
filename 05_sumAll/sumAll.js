const sumAll = function(min, max) {
    if (typeof min !== "number" || typeof max !== "number" || min < 0 || max < 0) {
        return "ERROR";
    }

    if (max < min) {
        [min, max] = [max, min];
    }

    let sum = 0;
    while (min <= max) {
        sum += min;
        min++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
