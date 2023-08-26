/* first to last approach */
function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumOfArray(arr.slice(1, arr.length));
}

/* last to first approach */
function sumOfArray2(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1));
}

console.log('-----------sumOfArray------------');
console.log('[1, 2, 3, 4]', sumOfArray([1, 2, 3, 4]));
console.log('[1, 2, 3, 4, 5]', sumOfArray([1, 2, 3, 4, 5]));
console.log('[1]', sumOfArray([1]));
console.log('---------------------------------\n\n');

console.log('-----------sumOfArray2------------');
console.log('[1, 2, 3, 4]', sumOfArray2([1, 2, 3, 4]));
console.log('[1, 2, 3, 4, 5]', sumOfArray2([1, 2, 3, 4, 5]));
console.log('[1]', sumOfArray2([1]));
console.log('---------------------------------\n\n');

/*
# Sub Problem:
Add the element at index 0 with the sum of the sub-array formed by excluding the index 0 element of current array.
Add the element at the index 0 with the sum of elements from arr[1] to arr[arr.length - 1]

Note that we can achive this by going in the opposite direction as well (as implemented in sumOfArray2).
In this approach, we add the element at last index (i.e. arr[arr.length - 1]) with the sum of elements of the sub-array formed by excluding the last element of current array.

# Base case:
if (arr.length === 0) return 0;
if (arr.length === 1) return arr[0];

# Head or Tail recursion
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.
*/

/*
JAVASCRIPT SPECIFIC IMPROVEMENT TO THE SOLUTION
In JS, we can use array destructuring to extract the first element of the current array and the sub-array formed by excluding the first element as:
const [firstElement, ...restOfTheArray] = arr;

Note that this improvement does not add any performance enhancement to the solution.
It merely adds readability to the code.
*/

function sumOfArray3(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    return arr[0];
  }
  const [firstElement, ...restOfTheArray] = arr;
  return firstElement + sumOfArray3(restOfTheArray);
}

console.log('-----------sumOfArray3------------');
console.log('[1, 2, 3, 4]', sumOfArray3([1, 2, 3, 4]));
console.log('[1, 2, 3, 4, 5]', sumOfArray3([1, 2, 3, 4, 5]));
console.log('[1]', sumOfArray3([1]));
console.log('-----------------------------------');
