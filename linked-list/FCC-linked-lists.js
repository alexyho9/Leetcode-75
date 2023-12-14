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

// 1. Linked List Traversal - Iterative

