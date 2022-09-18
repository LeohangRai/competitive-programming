
/*
 * Given a pointer to the head node of a linked list, print each node's  element, one per line. 
 * If the head pointer is null (indicating the list is empty), there is nothing to print.
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

/* Recursive solution */
function printLinkedList(head) {
    if(head == null) {
        return;
    }
    console.log(head.data);
    printLinkedList(head.next);
}


/* Iterative solution */
function printLinkedListIterative(head) {
    while(head != null) {
        console.log(head.data);
        head = head.next;
    }
}