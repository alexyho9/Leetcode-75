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
const e = new Node('E');
const f = new Node('F');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// Add node to linked list