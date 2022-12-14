# A linked list is said to contain a cycle if any node is visited more than once while traversing the list. Given a pointer to the head of a linked list, determine if it contains a cycle. If it does, return 1. Otherwise, return 0.

def has_cycle(head):
    if head is None:
        return 0
    turtle = head
    rabbit = head
    while turtle and rabbit and rabbit.next:
        turtle = turtle.next
        rabbit = rabbit.next.next
        if turtle == rabbit:
            return 1
    return 0