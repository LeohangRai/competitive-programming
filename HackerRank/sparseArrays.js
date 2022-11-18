function matchingStrings(strings, queries) {
    /* 
    Loop through the "strings" array, check if it exists in the "queries" array. 
    Maintain a  hashmap such that if the current element of the "strings" array exists in the "queries" array, then we set it as a key in the hashmap and increase it's value by 1 each time it repeats in the "strings" array iteration.
    
    Finally, since we need to return the result as an array, for element in the "queries" array, push the corresponding value of that key from the hashmap into the "result" array. If the key does not exist for the current element, push 0.
    */

    let hashMap = {};
    let result = [];
    for(let j = 0; j < strings.length; j++) {
        if(queries.includes(strings[j])) {
            if(hashMap[strings[j]] != undefined){
                hashMap[strings[j]] += 1;
            } else {
                hashMap[strings[j]] = 1;
            }
        }
    }
    for(let i = 0; i < queries.length; i++) {
        if(hashMap[queries[i]]) {
            result.push(hashMap[queries[i]]);
        } else {
            result.push(0)
        }
    }
    return result;
}


console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bd']));