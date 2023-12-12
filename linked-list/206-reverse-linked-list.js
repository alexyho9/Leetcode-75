`
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
`;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

/// A -> B -> C -> D -> NULL

const printLinkedList = (head) => {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    return values;
};

/// A -> B -> C -> D -> NULL

const reverseList = function(head) {
    // Iterative
    if (head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return prev;
    }
    return null;
};


console.log(reverseList(a));