/*
 * Delete the node at a given position in a linked list and return a reference to the head node. 
 * The head is at position 0. 
 * The list may be empty after you delete the node. In that case, return a null value.
 * 
 * For your reference:
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(head, position) {
    if(head == null) {
        return null;
    }
    /* Position 0 means we have to delete the head node */
    if(position == 0) {
        head = head.next;
        return head;
    }
    let currNode = head;
    let currPosition = 0;
    /* Traverse up to (position-1) position and manipulate the links for deletion */    
    while(currNode.next != null && currPosition < position-1) {
        currNode = currNode.next;
        currPosition += 1;
    }
    if(currNode.next != null) {
        currNode.next = currNode.next.next;
    } 
    return head;
}
