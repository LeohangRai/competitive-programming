/*
Maintain a hashmap for roman symbols with their corresponding integer values
At the base level, roman symbols could be either single character (such as I, V, X, L, C, D, M) or double character (such as IV, IX, XL, XC, CD, CM).
Initialize the starting numValue as 0 for the given roman string.
For every character of the given string inside loop, check if the substring (current char + next char) matches a key (symbol) in the hashmap.
If the substring does match a key in the hashmap, add the value of that key to the numValue.
If it does not, just find the value of current char in the string from the hashmpa and add it to numValue.
Continue this process till the final character of the string.
*/

function romanToInt(s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let numValue = 0;
    let i = 0;
    let romanSymbols = Object.keys(roman);
    while(i < s.length) {
        if(i+1 < s.length && romanSymbols.includes(s.slice(i, i+2))) {
            numValue += roman[s.slice(i, i+2)];
            i += 2;
        }
        else {
            numValue += roman[s[i]];
            i += 1;
        }
    }
    return numValue;
};

console.log(romanToInt('CM'));
console.log(romanToInt('M'));
console.log(romanToInt('XII'));