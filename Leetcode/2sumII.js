/* 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
*/

var twoSumII = function(numbers, target) {
    let lPointer = 0; //start index of the array
    let rPointer = numbers.length - 1; // end index of the array
    
    /* 
    Compare the sum of elements at indices "lPointer" and "rPointer" with the target value
    If the sum is less than the target, increase the left pointer
    If the sum is greater than the target, decrease the right pointer
    And finally, when the sum equals target, return lPointer and rPointer plus 1. (plus 1 because the question demands the answer to be 1 indexed instead of 0 indexed)
    This works because the array is sorted in this case.
    */
    while(lPointer < rPointer) {
        if(numbers[lPointer] + numbers[rPointer] > target){
            rPointer -= 1;
        } else if (numbers[lPointer] + numbers[rPointer] < target) {
            lPointer += 1;
        } else {
            return [lPointer + 1, rPointer + 1]
        }
    }
};

console.log(twoSumII([2,7,11,15], 9));
console.log(twoSumII([2,3,4], 6));
console.log(twoSumII([-1,0], -1));