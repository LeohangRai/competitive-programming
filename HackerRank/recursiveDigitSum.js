function superDigit(n, k) {
    // Write your code here
    if(k != undefined) {
        n = n.repeat(k);
    }
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += Number(n.slice(i, i + 1));
    }
    if(sum.toString().length === 1) {
        return sum;
    } else {
        return superDigit(sum.toString(), undefined);
    }
}