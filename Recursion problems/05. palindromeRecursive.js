// Recursive approach
function palindromeRecursive(str) {
  if (str.length === 1 || str.length === 0) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return palindromeRecursive(str.slice(1, str.length - 1));
}

/*
# Intuition
In each recursive call, we need to check if the first and last characters of the string are equal or not.
If they are not equal, then we immediately return false.
If they are equal, we just recursively call the function with a sub-string formed by slicing the current string from index 1 to second last index.
That is, palindromeRecursive(str.slice(1, str.length - 1))

# Base cases:
1. If the length of the current string is 1 or 0, return True.
This is because a string with only 1 or no characters is a palindrome.
if(str.length == 1 || str.length == 0) return true;

2. If the first and last characters of the current string are not equal, immediately return False.
if(firstChar != lastChar) return false;

# Sub problem:
Check whether the first and last character of the current string are equal or not.
Recursively check whether the same is True for the sub string formed by removing the first and last characters of the current string.

# Head or Tail recursion
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.
*/

console.log('a', palindromeRecursive('a'));
console.log('rr', palindromeRecursive('rr'));
console.log('civic', palindromeRecursive('civic'));
console.log('civici', palindromeRecursive('civici'));
console.log('madam', palindromeRecursive('madam'));
console.log('maadam', palindromeRecursive('maadam'));
console.log('radar', palindromeRecursive('radar'));
console.log('heeh', palindromeRecursive('heeh'));
