function isAnagram(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    let sDict = {};
    let tDict = {};

    /* We could use a single loop here since both s and t need to have the same length in order to be valid anagrams
    I used 2 different loops because it seemed to provide a better performance in leetcode
    */
    for(let i = 0; i < s.length; i++) {
        if(sDict[s[i]]){
            sDict[s[i]] += 1;
        } else {
            sDict[s[i]] = 1;
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(tDict[t[i]]){
            tDict[t[i]] += 1;
        } else {
            tDict[t[i]] = 1;
        }
    }
    
    let letters = Object.keys(sDict);
    for(let i = 0; i < letters.length; i++) {
        if(sDict[letters[i]] != tDict[letters[i]]){
            return false;
        }
    }
    return true;
};

console.log(isAnagram("car", "rat"));
console.log(isAnagram("anagram", "nagaram"));