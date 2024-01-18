/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    let pattern = [1];
    for (let i = 1; i <= n; i++) {
        let last = pattern[i - 1];
        let second = pattern[i - 2] || 0;
        let subtotal = last + second;
        pattern.push(subtotal);
    }
    return pattern[n];
};


console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));