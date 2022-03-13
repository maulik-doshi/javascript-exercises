const repeatString = function(msg, times) {
    if (times < 0) {
        return "ERROR";
    }

    let result = "";
    for (let i = 0; i < times; i++) {
        result += msg;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
