/*
Given a number n >= 1, write a function that returns the nth 
number in the look-and-say sequence as a string.
*/

function lookAndSay (nth, str = '1') {
  if (nth <= 1) return str; 
  
  let count = 1, nextStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i+1] === str[i]) {
      count++;
    } else {
      nextStr += count + str[i];
      count = 1;
    }
  }
  return lookAndSay(nth - 1, nextStr);
}
/* time complexity: A single iteration is O(S) for a string S digits long.
  but each iteration is longer after that. In the worst case, the string length would
  double each iteration. So for N iterations that's worst case O(N*S*2^N)
  */
// space complexity: O(S*2^N) for the same reason
/* Incidentally, I like this recursive version on aesthetic grounds, but it's easy
  to transform it into a self-contained function using another for-loop.
  */


// tests
console.log(lookAndSay(1) === '1');
console.log(lookAndSay(2) === '11');
console.log(lookAndSay(3) === '21');
console.log(lookAndSay(4) === '1211');
console.log(lookAndSay(5) === '111221');
console.log(lookAndSay(6) === '312211');
console.log(lookAndSay(7) === '13112221');
console.log(lookAndSay(8) === '1113213211');
