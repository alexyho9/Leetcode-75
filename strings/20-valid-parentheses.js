/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stack.push(s[i]);
        }
        else if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
            if (stack.length == 0) return false;
            let top = stack.pop();
            if (top != map[s[i]]) return false;
        }
    }
    if (stack.length == 0) return true;
    return false;
};


let ex2 = "()[]{}";
let ex3 = "(]";
let ex4 = "{[]}";

console.log(isValid(ex2));
console.log(isValid(ex3));
console.log(isValid(ex4));