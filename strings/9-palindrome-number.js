/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();

    if (x == x.split('').reverse().join('')) {
        return true;
    }
    else {return false}
};


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


// return x.toString().split('').reverse().join('') == x