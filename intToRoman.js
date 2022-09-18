function intToRoman(num) {
    let romanDictionary = [
        [1000, 'M']
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ]

    console.log(romanDictionary[0]);
    let romanValue = '';
    for(let i = 0; i < romanDictionary.length; i++) {
        if(Math.floor(num / romanDictionary[i][0]) != 0) {
            let romanSym = romanDictionary[i][1];
            let times = num / Math.floor(num / romanDictionary[i][0]);
            romanValue += (romanSym * times);
            num = num % num / Math.floor(num / romanDictionary[i][0]);
        }
    }
    return
    
}

console.log(intToRoman(2994));
console.log(intToRoman(58));