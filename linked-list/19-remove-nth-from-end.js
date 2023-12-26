class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = (next===undefined ? null : next);
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;


var removeNthFromEnd = function(head, n) {
    // create dummy node before list, create left and right pointers
    let dummy = new Node(0, head);
    let left = dummy;
    let right = head;
    // increment right pointer until spaced away n spaces from left pointer
    while (n > 0 && right != null) {
        right = right.next;
        n -= 1;
    }
    // increment left pointer until right is null,
    while (right != null) {
        right = right.next;
        left = left.next;
    }
    // then link left pointer to leapfrog next, effectively deleting node
    left.next = left.next.next;
    // return first node after dummy
    return dummy.next;
}

console.log(removeNthFromEnd(a, 2));