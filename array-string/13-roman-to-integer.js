var romanToInt = function(s) {
    keys = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let value = keys[letter];
        total += value;
        if (letter == "I") {
            if (s[i + 1] == "X" || s[i + 1] == "V") {
                total -= 2;
            }
        }
        else if (letter == "X") {
            if (s[i + 1] == "L" || s[i + 1] == "C") {
                total -= 20;
            }
        }
        else if (letter == "C") {
            if (s[i + 1] == "D" || s[i + 1] == "M") {
                total -= 200;
            }
        }
    }
    return total;
};


console.log(romanToInt("XII"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));
console.log(romanToInt("XCXI"));
console.log(romanToInt("MCMXCIV"));
