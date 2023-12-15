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


const e = new Node(2);
const f = new Node(8);
const g = new Node(3);
const h = new Node(7);
e.next = f;
f.next = g;
g.next = h;

// 3a. Sum of List - Iterative
const sumList = (head) => {
    let total = 0;
    let curr = head;
    while (curr != null) {
        total += curr.value;
        curr = curr.next;
    }
    return total;
}

// 3b. Sum of List - Recursive
const rSumList = (head) => {
    if (head == null) return 0;
    return head.value + rSumList(head.next);
};

console.log(sumList(e));
console.log(rSumList(e));


// 4a. Find target value - Iterative
const findTarget = (head, target) => {
    let curr = head;
    while (curr) {
        if (curr.value == target) return true;
        curr = curr.next;
    }
    return false
};

// 4b. Find target value - Recursive
const rFindTarget = (head, target) => {
    if (head == null) return false;
    if (head.value == target) return true;
    return rFindTarget(head.next, target);
}

console.log(findTarget(e, 7));
console.log(findTarget(a, 'G'));
console.log(rFindTarget(e, 7));
console.log(rFindTarget(a, 'G'));


// 5a. Get Node Value - Iterative
const getNodeValue = (head, index) => {
    let counter = 0;
    let curr = head;
    while (curr) {
        if (counter == index) return curr.value;
        curr = curr.next;
        counter++;
    }
    return null;
}

// 5b. Get Node Value - Recursive
const rGetNodeValue = (head, index) => {
    if (head == null) return null;
    if (index == 0) return head.value;
    return rGetNodeValue(head.next, index - 1);
}

console.log(getNodeValue(a, 2));
console.log(rGetNodeValue(e, 2));


// 6a. Reverse List - Iterative
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// 6b. Reverse List - Recursive
const rReverseList = (head, prev = null) => {
    if (head == null) return prev;
    let next = head.next;
    head.next = prev;
    return reverseList(next, head);
}

console.log(reverseList(a));
console.log(rReverseList(e));


// 7a. Zipper List - Iterative
const zipperLists = (head1, head2) => {
    let tail = head1;
    let curr1 = head1.next;
    let curr2 = head2;
    let counter = 0;

    while (curr1 != null && curr2 != null) {
        if (counter % 2 == 0) {
            tail.next = curr2;
            curr2 = curr2.next;
        }
        else {
            tail.next = curr1;
            curr1 = curr1.next;
        }
        tail = tail.next;
        counter += 1;
    }

    if (curr1 != null) tail.next = curr1;
    if (curr2 != null) tail.next = curr2;
    return head1;
}

console.log(zipperLists(a, e));