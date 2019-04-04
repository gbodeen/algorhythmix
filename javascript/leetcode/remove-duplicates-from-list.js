/*
Given a sorted linked list, delete all duplicates such that each element appear only once.
*/

var deleteDuplicates = function (head) {
  let current = head, next;
  while (current) {
    next = current && current.next;
    if (next && next.val === current.val) {
      current.next = next.next;
    } else {
      current = next;
    }
  }
  return head;
};


// tests
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var A = null;
console.log(deleteDuplicates(A)); // null
A = new ListNode(7);
console.log(deleteDuplicates(A)); // 7
A = new ListNode(1);
A.next = new ListNode(2);
A.next.next = new ListNode(3);
console.log(deleteDuplicates(A)); // 1,2,3
A = new ListNode(1);
A.next = new ListNode(1);
A.next.next = new ListNode(1);
console.log(deleteDuplicates(A)); // 1
A = new ListNode(0);
A.next = new ListNode(1);
A.next.next = new ListNode(1);
console.log(deleteDuplicates(A)); // 0,1
A = new ListNode(0);
A.next = new ListNode(0);
A.next.next = new ListNode(5);
console.log(deleteDuplicates(A)); // 0,5