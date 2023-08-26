// Iterative approach 1
function palindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  for (let i = 0; i < str.length; i++) {
    if (i >= str.length - 1 - i) return true; // this is like the base condition
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
}

/*
# Explanation
What we can do is check whether the first element is equal to the last element and the second element element is equal to the second last element and so on.
For each iteration of 'i', we can get its corresponding rear element as arr[str.length - 1 - i].
NOTE: We need to subtract that 1 from str.length, because initially i is 0.

So in every iteration, we will check whether the element at current index is equal to the element at index (str.length - 1 - i).
If it is not, we will immediately return False.

Following this process, we will come towards the middle of the string.
If the value of i and (str.length - 1 - i) overlap, then it means all the iterations from start to the middle of the string had a corresponding character in the string.
So the string is a palindrome.

# Example 1 (Odd number of characters)
So, if we had the string 'radar':
1. Iteration 1:
i --> 0
str.length - 1 - i ---> 5 - 1 - 0 --> 4
arr[0] == 'r'
arr[4] == 'r'

2. Iteration 2:
i --> 1
str.length - 1 - i --> 5 - 1 - 1 --> 3
arr[1] == 'a'
arr[3] == 'a'

3. Iteration 3:
i --> 2
str.length - 1 - i --> 5 - 1 - 2 --> 2

Here i == str.length - 1, it means that we have checked all the other elements except the middle one and all of them had a corresponding equal in the rear.
So we return True.


# Example 2 (Even number of characters)
If we had the string 'abba':
1. Iteration 1:
i --> 0
str.length - 1 - i --> 4 - 1 - 0 --> 3
arr[0] == 'a'
arr[3] == 'a

2. Iteration 2:
i --> 1
str.length - 1 - i --> 4 - 1 - 1 --> 2
arr[1] == 'b'
arr[2] == 'b'

3. Iteration 3:
i --> 2
str.length - 1 - i --> 4 - 1 - 2 --> 1

Here, i > str.length - 1, it means that we have checked all the other elements except the middle one and all of them had a corresponding equal in the rear.
So we return True.
*/


// Improved version of the iterative approach
function palindrome2(str) {
  if (str.length === 0 || str.length === 1) return true;
  const midPointIndex = Math.floor(str.length / 2);
  for (let i = 0; i < midPointIndex; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*
# Explanation
In this improved version, we just iterate from index 0 to the mid index of the string.
This is because, if all the characters in the first half have a corresponding equal character in the second half, then it must be a palindrome.
In case there are odd number of characters, the middle character does not need to have a corresponding equal for the string to be a palindrome.
*/

console.log('--------Iterative approach 1-------')
console.log('a', palindrome('a'));
console.log('rr', palindrome('rr'));
console.log('civic', palindrome('civic'));
console.log('civici', palindrome('civici'));
console.log('madam', palindrome('madam'));
console.log('maadam', palindrome('maadam'));
console.log('radar', palindrome('radar'));
console.log('heeh', palindrome('heeh'));
console.log('----------------------------------\n\n')


console.log('--------Improved algorithm--------')
console.log('a', palindrome2('a'));
console.log('rr', palindrome2('rr'));
console.log('civic', palindrome2('civic'));
console.log('civici', palindrome2('civici'));
console.log('madam', palindrome2('madam'));
console.log('maadam', palindrome2('maadam'));
console.log('radar', palindrome2('radar'));
console.log('heeh', palindrome2('heeh'));
console.log('----------------------------------')


