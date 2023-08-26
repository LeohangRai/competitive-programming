function factorial(num) {
  if (num < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
/*
# Sub-problem:
Get the factorial of the number that is less than current number by 1 and multiply it with the current number
So for num, get the factorial of (num-1)
This means, for n, the factorial will be num * factorial(num-1)
And that is what we need to return

# Base case:
If the current number is 0 or 1, we don't need to multiply anymore, so we can just return 1 at that point.
So if(num === 0 || num === 1) return 1;

# Head or Tail recursion:
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.

# Gotchas
In the base case, we can see that, we are returning 1 if(num === 0 || num === 1) instead of just checking if(num === 1).
This is because, if we only check if(num ===1), and the function is called with 0, it will never reach the base condition and lead to a 'max call stack size exceeded" error.
*/

console.log('Factorial of 0:', factorial(0));
console.log('Factorial of 1:', factorial(1));
console.log('Factorial of 2:', factorial(2));
console.log('Factorial of 7:', factorial(7));
console.log('Factorial of 10:', factorial(10));
console.log('Factorial of 99:', factorial(99));
