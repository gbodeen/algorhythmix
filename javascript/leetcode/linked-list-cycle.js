/*
Given a linked list, determine if it has a cycle in it.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const hasCycle = function (head) {
  let a = head;
  if (!a) return false;
  let b = a.next;
  if (!b) return false;

  while (a && b && a !== b) {
    a = a.next;
    b = b.next && b.next.next;
  }

  return a === b;
};


// tests
var A = null;
console.log(hasCycle(A)); // false
A = new ListNode(0);
console.log(hasCycle(A)); // false
let temp = A;
for (let i = 1; i <= 100; i++) {
  temp.next = new ListNode(i);
  temp = temp.next;
}
console.log(hasCycle(A)); // false
temp.next = A.next.next.next.next;
console.log(hasCycle(A)); // true
A = new ListNode(0);
A.next = A;
console.log(hasCycle(A)); // true