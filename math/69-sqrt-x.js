/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // create holder for result
    let result = 0;
    // iterate through range x
    for (let i = 0; i <= x; i++) {
        if (i * i > x) return result;
        result = i;
        // console.log(result);
    }
    // console.log(result);
    return result;
};


console.log(mySqrt(8));
console.log(mySqrt(9));
