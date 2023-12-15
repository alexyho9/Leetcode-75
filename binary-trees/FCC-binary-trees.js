
// Define Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Set up Tree
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// Depth First Traversal
const iDFV = (root) => {
    if (!root) return [];
    const result = [];
    const stack = [ root ];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.value);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
}

// Recursive DFS
const rDFV = (root) => {
    if (!root) return [];
    const leftValues = rDFS(root.left);
    const rightValues = rDFS(root.right);
    return [ root.value, ...leftValues, ...rightValues ];
}

// console.log(iDFV(a));
// console.log(rDFV(a));


// Iterative Breadth First Traversal


// Recursive Breadth First Traversal