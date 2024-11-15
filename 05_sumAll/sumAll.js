const sumAll = function(first, last) {
    if (first < 0 || last < 0 || !Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    }
            let sum = 0;
    if (first > last) {
        for (let i = last; i <= first; i++) {
            sum += i;
        }
    } 
    else {
        for (let i = first; i <= last; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
