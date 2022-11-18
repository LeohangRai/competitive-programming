/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/


/* Bruteforce solution */
var twoSumBF = function(nums, target) {
    /* 
    Basically just loop through each element of the array and compare its sum with its succeeding elements to see if  the sum equals to the target.
    If it does, just return the current indices: 
    i --> current element
    j --> succeeding element of j that adds up current element to equal the target
    */
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};

console.log(twoSumBF([3,2,4], 6));
console.log(twoSumBF([3,3], 6));
console.log(twoSumBF([2,7,11,15], 9));


/* O(n) solution */
function twoSum(nums, target) {
    /* 
    Maintain a hashmap that stores the indices of the elements of the given array.
    On every iteration of the array, look for the complement of the current element in the hashmap.
    By complement, I mean the significant other element that adds up with the current element to equal to the target. 
    If the complement does not exist in the hashmap, append the current element in the hashmap as the key and its index as the value.
    If the complement exists, just return the index of that complement from the hashmap along with the index of the current element.
    Continue this process until the pair is found.
    */
    let hashMap = {}
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(hashMap[complement] != undefined) {
            return [hashMap[complement], i];
        } else {
            hashMap[nums[i]] = i; 
        }
    }
}

console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([2,7,11,15], 9));
