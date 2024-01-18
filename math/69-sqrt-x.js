/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = 0;
    for (let i = 0; i <= x; i++) {
        if (i * i > x) return result;
        result = i;
    }
    return result;
};


console.log(mySqrt(8));
console.log(mySqrt(9));
