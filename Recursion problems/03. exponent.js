function powerFunction(base, exponent) {
  if (base === 1 || base === 0) return base;
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  if(exponent < 0) { 
    return 1 / powerFunction(base, -exponent) 
  }
  return base * powerFunction(base, exponent - 1);
}

/*
# Base cases:
if (base === 1 OR base === 0) return base;
if (exponent == 0) return 1;
if (exponent == 1) return base;

# Sub Problem: 
Get the value of the base powered to (exponent - 1) and multiply with the base
So for base 'b' and exponent 'e', return b * exponent(b, e);

# Head or Tail recursion
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.

# Intuitions
All of the base cases written in this recursive function are based on Basic mathematics around Exponents and powers.
The base cases capture the fundamental properties of exponentiation.

# Gotchas
We have to consider the fact that exponents can be negative as well.
When the exponent is negative, the result will be the reciprocal or inverse of the power computed for the positive exponent.
This means, any base raised to a negative exponent can be translated to 1/(base^ -exponent).
So, 2^(-4) is equivalent to 1/(2^4) --> 1/16
And, 7^(-2) is eqivalent to 1/(7^2) --> 1/49

This means, if the given exponent is negative, we can still use the powerFunction function recursively but it should be in the form 1/(base ^ -exponent)
Hence the statement,
if(exponent < 0) return 1 / powerFunction(base, -exponent);
Note that this is not a base case. It is still a recursive call wrapped arond a conditional (if statement).
*/

console.log("------------Positive Exponents------------");
console.log('0 raised to power 7', powerFunction(0, 7));
console.log('1 raised to power 9', powerFunction(1, 9));
console.log('7 raised to power 0', powerFunction(7, 0));
console.log('72 raised to power 1', powerFunction(72, 1));
console.log('2 raised to power 4', powerFunction(2, 4));
console.log('4 raised to power 7', powerFunction(4, 7));
console.log('10 raised to power 10', powerFunction(10, 10));
console.log("-------------------------------------------\n\n");

console.log("------------Negative Exponents-------------");
console.log('0 raised to power -7', powerFunction(0, -7));
console.log('1 raised to power -9', powerFunction(1, -9));
console.log('72 raised to power -1', powerFunction(72, -1));
console.log('2 raised to power -4', powerFunction(2, -4));
console.log('4 raised to power -7', powerFunction(4, -7));
console.log('10 raised to power -10', powerFunction(10, -10));
console.log("-------------------------------------------");