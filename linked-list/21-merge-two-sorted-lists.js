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


var mergeTwoLists = function(list1, list2) {
    // create new linked list dummy
    let dummy = new ListNode();
    let pointer = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = list1;
            list1 = list1.next;
        }
        else if (list2.val < list1.val) {
            pointer.next = list2;
            list2 = list2.next;
        }
        pointer = pointer.next;
    }
    while (list1) {
        pointer.next = list1;
        list1 = list1.next;
        pointer = pointer.next;
    }
    while (list2) {
        pointer.next = list2;
        list2 = list2.next;
        pointer = pointer.next;
    }
    return dummy.next;
};

