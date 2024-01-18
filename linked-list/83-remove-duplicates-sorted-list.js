
//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode("A", head);
    let current = head;
    let prev = dummy;
    while (current) {
        if (current.val !== prev.val) {
            prev = current;
        } else {
            prev.next = current.next;
        }
        current = current.next;
    }
    return head;
};


let a = new ListNode("1");
let b = new ListNode("1");
let c = new ListNode("2");
let d = new ListNode("3");
let e = new ListNode("3");
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(deleteDuplicates(a));