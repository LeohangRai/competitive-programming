# python3

from collections import namedtuple

Bracket = namedtuple("Bracket", ["char", "position"])


def are_matching(left, right):
    return (left + right) in ["()", "[]", "{}"]


global current
current = 0


def find_mismatch(text):
    opening_brackets_stack = []
    #last = 0
    global current
    for i, next in enumerate(text):
        if next in "([{":
            opening_brackets_stack.append(next)
            current = i

        if next in ")]}":
            if len(opening_brackets_stack) == 0:
                return i+1
            else:
                if are_matching(opening_brackets_stack[-1], next):
                    opening_brackets_stack.pop()
                    # global current
                    current -= 1
                else:
                    return i+1

    if len(opening_brackets_stack) != 0:
        # global current
        return current+1
    else:
        return "Success"


def main():
    text = input()
    mismatch = find_mismatch(text)
    print(mismatch)
    # Printing answer, write your code here


if __name__ == "__main__":
    main()
