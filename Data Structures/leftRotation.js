/* 
A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.
Example:
d =  2
arr = [1,2,3,4,5]
After 2 rotations, arr' = [3,4,5,1,2]
*/

function rotateLeft(d, arr) {
    /* 
    Use the array method that deletes and returns the first element of the array.
    Push the element returned by the delete method to the end of the element.
    Repeat this process "d" times.
    NOTE: In JS, shift() deletes and returns the first element of an array.
    You could use pop(0) in Python
    */
    while(d > 0) {
        arr.push(arr.shift());
        d -= 1;
    }
    return arr;
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
console.log(rotateLeft(4, [1, 2, 3, 4, 5]));