/* 
Write a function that reverses a linked list.
Constraint 1: Do this in linear time.
Constraint 2: Do this in constant space.
Constraint 3: Do not mutate the original nodes by adding any new properties.
*/

var reverseLinkedList = function (linkedList) {
  let current = linkedList, prev = null, next;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
// Meets complexity & other constraints.

// tests
var testval = { "value": "A", "next": null };
console.log(reverseLinkedList(testval) === testval); // unchanged in this case
testval = { "value": "A", "next": { "value": "B", "next": { "value": "C", "next": { "value": "D", "next": { "value": "E", "next": null } } } } };
console.log(reverseLinkedList(testval));
// {"value":"E","next":{"value":"D","next":{"value":"C","next":{"value":"B","next":{"value":"A","next":null}}}}};