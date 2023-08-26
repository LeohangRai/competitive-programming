/**
 *
 * @param {number} n
 * @returns the nth term in the Fibonacci Sequence
 */
function fibonacci(n) {
  if (n < 1) {
    throw new Error('Please input a positive integer.');
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
# Base Case:
if(n === 1) return 0;
if(n === 2) return 1;

# Sub problem
Get sum of the (n-1)th term and the (n - 2)th term
So for n, return fibonacci(n-1) + fibonacci(n - 2);

# Head or Tail recursion
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.

# Intuitions
Since our sub problem involves getting the sum of (n-1) and (n-2).
We need at least 2 base cases to satisfy (n-1) and (n-2) eventually as 'n' reduces down to 1.
The two base cases handle the initial conditions of the Fibonacci sequence, allowing the recursion to progress and calculate subsequent terms.
*/

console.log('The first term: ', fibonacci(1));
console.log('The second term: ', fibonacci(2));
console.log('The third term: ', fibonacci(3));
console.log('The fourth term: ', fibonacci(4));
console.log('The seventh term: ', fibonacci(7));
console.log('The ninth term:', fibonacci(9));
