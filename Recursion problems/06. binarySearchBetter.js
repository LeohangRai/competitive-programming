// better implementation, without array slicing
// this implementation just passes the same array in each recursive call, but updates the start and end indices for lookup
function binarySearch2(arr, x, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  const midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === x) return arr[midIndex];
  if (arr[midIndex] < x) {
    return binarySearch2(arr, x, midIndex + 1, end);
  }
  return binarySearch2(arr, x, start, midIndex - 1);
}


/*
# Intuitions:
First things first, this search algorithm only works on sorted arrays.
So what we can do is, get the element at the middle of the array and check if it is equal to 'x'.
If yes, simply just return the element.,
If not, we see if the middle element is greater or smaller than 'x'.
If it is smaller than x, we perform the same operation recursively on sub-array towards the right side of the middle element.
Otherwise, we will call the function recursively on sub-array towards the left side of the middle element.
We do this by updating the 'start' and 'end' indices in each recursive call, instead of passing a sub-array sliced from the original array like we did in the previous implementation of Binary Search.

# Base cases:
If the element at the current middle index is equal to 'x', we simply return it.
if (middleElement == x) return middleElement;

If the start index is greater than the end index, it means we have looked through the entire possible section of the array and not found 'x', so we return -1 or "Not found".
if (start > end) return -1;

# Sub problem:
In each function call, we calculate the middle index of the array and check whether the middle element of the array (i.e. arr[midIndex]) is equal to 'x' or not.
If it is not true for the current array's middle element, we recursively call the function on the sub array towards either the right or the left of the current array.
If middleELement < x, recursively call it on the right sub-array, i.e. binarySearch2(arr, x, midIndex + 1, end)
Other wise, call it on the left sub-array, i.e. binarySearch2(arr, x, start, midIndex - 1).

# Head or Tail recursion
There are no statements after the recursive call (the function is immediately returned with the recursive call).
In other words, the recursive call is happening at the end or tail of the function.
Hence this is a case of tail recursion.

# Visualization
# Case 1: (x is found in the array)
Let's say we have the array: [1, 2, 3, 4, 5, 6, 7]
And we are looking for 7
so we call binarySearch([1, 2, 3, 4, 5, 6, 7], 7, 0, 6)

1. First call: binarySearch([1, 2, 3, 4, 5, 6, 7], 7, 0, 6)
midIndex = (0 + 6) / 2 => 3
arr[midIndex] => arr[3] => 4
4 < 7 
So call, binarySearch([1,2,3,4,5,6,7], 7, 4, 6)

2. Second call: binarySearch([1,2,3,4,5,6,7], 7, 4, 6)
midIndex = (4 + 6) / 2 => 5
arr[midIndex] => arr[5] => 6
6 < 7
so call, binarySearch([1,2,3,4,5,6,7], 7, 6, 6)

3. Third call: binarySearch([1,2,3,4,5,6,7], 7, 6, 6)
midIndex = (6 + 6) / 2 => 6
arr[midIndex] => arr[6] => 7
7 is the required value so return arr[6]


# Case 2: (x does not exist in the array)
Let's say we have the array: [1, 2, 4, 7, 9]
And we are looking for 3
so we call binarySearch([1, 2, 4, 7, 9], 3, 0, 4)

1. First call: binarySearch([1, 2, 4, 7, 9], 3, 0, 4)
midIndex = (0 + 4) / 2 => 2
midElement => arr[midIndex] => arr[2] => 4
midElement > x, so call it on the left side, binarySearch([1, 2, 4, 7, 9], 3, 0, 1)

2. Second call: binarySearch([1, 2, 4, 7, 9], 3, 0, 1)
midIndex = (0 + 1) / 2 ==> 0
midElement = arr[midIndex] => arr[0] ==> 1
midElement < x, so call it on the right side, binarySearch([1, 2, 4, 7, 9], 3, 1, 0)

3. Third call: binarySearch([1, 2, 4, 7, 9], 3, 1, 0)
start > end, so return -1 or "Not found"
*/

console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7], 7));
console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7], 9));
console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7], 0));
console.log(binarySearch2([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(binarySearch2([1, 2, 4, 7, 9], 3));
console.log(binarySearch2([1, 3, 4, 7, 9], 3));
