/*
Free Code Camp - Linked Lists for Technical Interviews (Structy)

1. Linked List Traversal
2. Linked List Values
3. Sum of List
4. Linked List Find
5. Get Node Value

*/

// Set up nodes
class Node {
    constructor(value) {
        this.value = value;
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

//  A -> B -> C -> D -> NULL


// 1a. Linked List Traversal - Iterative
const printLinkedList = (head) => {
    let current = head;
    while (current != null) {
        console.log(current.value);
        current = current.next;
    }
};

// 1b. Linked List Traversal - Recursive
const rPrintLinkedList = (head) => {
    // Base Case
    if (head == null) return;
    // Recursive Case
    console.log(head.value);
    rPrintLinkedList(head.next);
}

// printLinkedList(a);
// rPrintLinkedList(a);


// 2a. Linked List Values - Iterative
const linkedListValues = (head) => {
    const values = [];
    let current = head;
    while (current != null) {
        values.push(current.value);
        current = current.next;
    }
    return values;
}

// 2b. Linked List Values - Recursive
const rLinkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
};

const fillValues = (head, values) => {
    if (head == null) return;
    values.push(head.value);
    fillValues(head.next, values);
}

console.log(linkedListValues(a));
console.log(rLinkedListValues(a));