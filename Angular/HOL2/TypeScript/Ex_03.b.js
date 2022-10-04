var range = function (start, stop, step) {
    if (step === void 0) { step = 1; }
    // returns Array
    var numbers = [];
    for (var i = start; i <= stop; i += step) {
        numbers.push(i);
    }
    return numbers;
};
// getting an array from range
var arr = range(1, 5);
arr.forEach(function (i) {
    console.log(i);
});
// console.log(range(1, 5, 1))
