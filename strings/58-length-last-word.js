/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // split string to words
    let array = s.split(" ");

    // remove empty strings in array
    let array2 = [];
    for (let word of array) {
        if (word.length > 0) {
            array2.push(word);
        }
    }
    // get last index word
    let last = array2[array2.length-1];

    // count length of last word
    return last.length;
};

s = "Hello World"  // 5
s2 = "   fly me   to   the moon  "  // 4
s3 = "a";  // 1


lengthOfLastWord(s);
lengthOfLastWord(s2);