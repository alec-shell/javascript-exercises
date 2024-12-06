const fibonacci = function(fib) {
    fib = parseInt(fib);
    if (fib < 0) return "OOPS";
    let current = 1;
    let preceding = 0;
    if (fib === 0) return preceding;
    for (let i = 1; i < fib; i++) {
        let next = current + preceding;
        preceding = current;
        current = next;
    }
    return current;
};


// Do not edit below this line
module.exports = fibonacci;
