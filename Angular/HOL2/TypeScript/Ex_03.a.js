var si = function (p, r, t) {
    if (r === void 0) { r = 10; }
    return (p * r * (t || 1)) / 100;
};
console.log(si(100, 10, 2));
console.log(si(100, 10));
console.log(si(100));
