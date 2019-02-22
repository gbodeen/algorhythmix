/* Ah, the classic.

Fill in your function, so that if the number that was passed 
in to the function is divisible by 3 it returns the value “Fizz”, 
if the value is divisible by 5 it returns “Buzz”, if the value 
is divisible by both 3 and 5 return the value “FizzBuzz”, and 
finally if the number is not divisible by any of those just 
return the value.
*/

function FizzBuzz(value) {
  return (value % 3 ? '' : 'Fizz') +
    (value % 5 ? '' : 'Buzz') || value;
}
// This is the JavaScript version I like.
// It's clean and idiomatic.

// For efficiency (as if that would matter in FizzBuzz), I'd do this:
function FizzBuzz(value) {
  return value % 3 ?
    (value % 5 ? value : 'Buzz') :
    (value % 5 ? 'Fizz' : 'FizzBuzz');
}
// it does just 2 modules & 2 conditional checks and then returns something,
//  no other operations. But nested ternaries are hard to read.

// Of course, for maximum clarity, one could also write:
function FizzBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz';
  if (value % 3 === 0) return 'Fizz';
  if (value % 5 === 0) return 'Buzz';
  return value;
}


