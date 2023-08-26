function binarySearch(arr, x) {
  const midIndex = Math.floor((arr.length - 1) / 2)
  if(arr[midIndex] === x) return arr[midIndex];
  if(arr.length === 1) return -1;
  if(arr[midIndex] < x) {
    return binarySearch(arr.slice(midIndex + 1, arr.length), x);
  }
  return binarySearch(arr.slice(0, midIndex), x)
}


/*
# Intuitions:
First things first, this search algorithm only works on sorted arrays.
So what we can do is, get the element at the middle of the array and check if it is equal to 'x'.
If yes, simply just return the element.,
If not, we see if the middle element is greater or smaller than 'x'.
If it is smaller than x, we perform the same operation recursively on sub-array towards the right side of the middle element.
Otherwise, we will call the function recursively on sub-array towards the left side of the middle element.

# Base cases:
If the element at the current middle index is equal to 'x', we simply return it.
if(middleElement == x) return middleElement;

If the length of the current array has reached 1 and the element at the current middle index is not equal to 'x', it means that we have searched through the whole array and 'x' was not found.
Also, since the array size has reduced to 1. there cannot be any more sub-arrays to search through.
So, we return a falsy value or -1 or simply "Not found".
if(arr[midIndex] != x && arr.length == 1) return "Not found";
In our implementation, we have the if(middleElement == x) return middleElement already, so it is actually not essential to check if(arr[midIndex != x]).
So we can simply do:
if(arr.length == 1) return "Not found";

# Sub problem:
In each function call, we calculate the middle index of the array and check whether the middle element of the array (i.e. arr[midIndex]) is equal to 'x' or not.
If it is not true for the current array's middle element, we recursively call the function on the sub array towards either the right or the left of the current array.
If middleELement < x, recursively call it on the right sub-array, i.e. binarySearch(arr.slice(midIndex + 1, arr.length), x)
Other wise, call it on the left sub-array, i.e. binarySearch(arr.slice(0, midIndex), x).

# Head or Tail recursion
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.

# Visualization
# Case 1: (x is found in the array)
Let's say we have the array: [1, 2, 3, 4, 5, 6, 7]
And we are looking for 7

so we call binarySearch([1, 2, 3, 4, 5, 6, 7], 7)
1. First call 
midIndex: Math.floor((arr.length - 1) / 2) --> Math.floor((7 - 1)/2) --> 3
midElement: arr[midIndex] --> arr[3] --> 4
midElement < x, so call it on the right sub-array --> binarySearch([5, 6, 7], 7)

2. Second call: binarySearch([5, 6, 7], 7) 
midIndex: Math.floor((arr.length - 1) / 2) --> Math.floor((3 - 1)/2) --> 1
midElement: arr[midIndex] --> arr[1] --> 6
midElement < x, so call it on the right sub-array --> binarySearch([7], 7)

3. Thirdd call: binarySearch([7], 7)
midIndex: Math.floor((arr.length - 1) / 2) --> Math.floor((1 - 1)/2) --> 0
midElement: arr[midIndex] --> arr[0] --> 7
midElement == x, so return midElement

# Case 2: (x does not exist in the array)
Let's say we have the array: [1, 2, 4, 7, 9]
And we are looking for 3
so we call binarySearch([1, 2, 4, 7, 9], 3)
1. First call 
midIndex: Math.floor((arr.length - 1) / 2) --> Math.floor((5 - 1)/2) --> 2
midElement: arr[midIndex] --> arr[2] --> 4
midElement > x, so call it on the left sub-array --> binarySearch([1, 2], 3)

1. Second call --> binarySearch([1, 2], 3)
midIndex: Math.floor((arr.length - 1) / 2) --> Math.floor((2 - 1)/2) --> 0
midElement: arr[midIndex] --> arr[0] --> 1
midElement < x, so call it on the right sub-array --> binarySearch([2], 3)

3. Third call --> binarySearch([2], 3)
midIndex: Math.floor((arr.length - 1) / 2) --> Math.floor((1 - 1)/2) --> 0
midElement: arr[midIndex] --> arr[0] --> 2
midElement != x && arr.length == 1, so we may return a falsy value or -1 or just a "Not found" string. 
*/


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(binarySearch([1, 2, 4, 7, 9], 3));
console.log(binarySearch([1, 3, 4, 7, 9], 3));