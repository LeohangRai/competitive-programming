/*
 * Given a pointer to the head of a singly-linked list, print each  value from the reversed list. 
 * If the given list is empty, do not print anything.
 *
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

/* Recursive solution */
function reversePrint(head) {
    if(head == null) {
        return;
    } 
    reversePrint(head.next);
    console.log(head.data);
}

/* 
 I think another simple way of solving this problem would be to just loop through each node of the SLL in a linear fashion and store them in an array.
 Then just read the elements of the array in the reverse order, i.e. starting from index [arr.length - 1];
 Yes, this will have a space complexity of O(n).
 But recursive approach will also have to allocate 'n' number of call stack frames for each recursive call so.
 Stack could be used instead of array as well.
 */
