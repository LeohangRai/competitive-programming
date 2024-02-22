/* 
  1. If both the numbers are same, return the number.
  2. If either of the the two numbers is either 1 or 0, return 1.
  3. If the max out of the two numbers is divisible by the min one, return the min number.
  4. Otherwise use euclid's algorithm:
  NOTE: In our implementation, we assume that the max number is provided as the first arg 'a' and the min number as the second arg 'b'
  - divide the max number by the min number
  - if the remainder is 0, then the gcd is the min number
  - otherwise the gcd will be the "gcd of the min number and the remainder"

  I think this is the best video on why Euclid's algorithm works: https://youtu.be/qgcgZISJlEc
*/

function gcd(a, b) {
  if (a === b) return a;
  if ([0, 1].includes(a) || [0, 1].includes(b)) {
    return 1;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const remainder = max % min;
  if (remainder === 0) {
    return min;
  }
  return gcd(min, remainder);
}

module.exports = {
  gcd
};
