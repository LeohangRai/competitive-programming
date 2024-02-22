/* 
  1. If both the numbers are same, return the number.
  2. If either of the the two numbers is either 1 or 0, return 1.
  3. If the max out of the two numbers is divisible by the min one, return the min number.
  4. Otherwise:
  - Initialize the gcd value as 1.
  - Loop from 2 to the min of the two numbers
  - For each iteration if the current number is divides both the numbers, set is as the new gcd
  - return the gcd
*/

function gcd(a, b) {
  if (a === b) return a;
  if ([0, 1].includes(a) || [0, 1].includes(b)) {
    return 1;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  if (max % min === 0) {
    return min;
  }
  let gcd = 1;
  for (let i = 2; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

module.exports = {
  gcd
};
