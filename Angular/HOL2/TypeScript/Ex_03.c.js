var summing = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (a, b) { return a + b; }, 0);
};
console.log(summing(1, 2));
console.log(summing(1, 2, 3, 4, 5));
