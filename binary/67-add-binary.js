/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const reverseString = str => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

var addBinary = function(a, b) {
    let result = "";
    let a_reversed = reverseString(a);
    let b_reversed = reverseString(b);

    let carry = 0;

    let max_length = Math.max(a.length, b.length);

    let i = 0;
    while (i < max_length) {
        let a_digit = a_reversed[i] ? parseInt(a_reversed[i]) : 0;
        let b_digit = b_reversed[i] ? parseInt(b_reversed[i]) : 0;

        let digit_sum = (a_digit + b_digit + carry) % 2;
        carry = Math.floor((a_digit + b_digit + carry) / 2);

        result += String(digit_sum);

        i++;
    }
    // Final largest digit
    if (carry) result += carry;
    // Re-reverse result string
    result = reverseString(result);
    console.log(result);
    return result;
};


addBinary("1010", "1011");  // "10101"
addBinary("110", "1")  // "111"