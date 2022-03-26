const palindromes = function (s) {
    const validChars = s.toUpperCase().split("").filter(c => c >= 'A' && c <= 'Z');
    for (let i = 0; i < validChars.length; i++) {
        if (validChars[i] !== validChars[validChars.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
