/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        let match = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != match) {
                return result;
            }
        }
        result += match;
    }
    return result;
};

const strs = ["flower","flow","flight"] // "fl"


console.log(longestCommonPrefix(strs));