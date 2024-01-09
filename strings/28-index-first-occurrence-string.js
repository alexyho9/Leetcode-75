/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // iterate through string
    // if letter matches, check if following letters match
    // if one letter does not match, return -1
    // else return index of first letter that matches

    let result = -1;
    for (let i = 0; i < haystack.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] == needle[j]) {
            if (j == needle.length - 1 && haystack[i + j] == needle[j]) {
                result = i;
                return result;
            }
            j++;
        }
    }
    return result;
};


let ex1 = "sadbutsad";
let needle1 = "sad";  // output 0

let ex2 = "leetcode";
let needle2 = "leeto";

console.log(strStr(ex1, needle1));
strStr(ex2, needle2);

/*
var strStr2 = function(haystack, needle) {
    return haystack.indexOf(needle);
};
*/