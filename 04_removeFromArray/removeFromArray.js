const removeFromArray = function(arr, ...args) {
    let indicesToRemove = [];
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i])) {
            indicesToRemove.push(i);
        }
    }
    for (let i = indicesToRemove.length - 1; i >= 0; i--) {
        arr.splice(indicesToRemove[i], 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
