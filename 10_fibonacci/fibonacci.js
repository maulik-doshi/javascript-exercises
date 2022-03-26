const fibonacci = function(n) {
    let num = +n;
    if (num <= 0) return "OOPS";
    if (num <= 2) return 1;
    num -= 2;
    let first = 1;
    let second = 1;
    let next;
    for (let i = 0; i < num; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
