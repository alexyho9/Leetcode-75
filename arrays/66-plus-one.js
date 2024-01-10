/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = true;
    let i = digits.length - 1;

    while (carry) {
        if (i >= 0) {
            if (digits[i] == 9) {
                digits[i] = 0;
            }
            else {
                digits[i]++;
                carry = false;
            }
        }
        else {
            carry = false;
            digits.unshift(1);
        }
        i--;
    }
    console.log(digits);
    return digits;
};


let ex1 = [1, 2, 3, 4]  // [1, 2, 3, 5]
let ex2 = [9]  // [1, 0]
let ex3 = [1, 9, 9]  // [2, 0, 0]

plusOne(ex1);
plusOne(ex2);
plusOne(ex3);