/*
Alphabet Inventory
Given an alphabet and a string of text, write a method that tallies the count of each letter 
defined in said alphabet (case insensitive), then return the result of this tally.

Examples
alphabet:
"aBc"
text:
"aabbccdd"	
Output:
"a:2,b:2,c:2"

alphabet:
"x"
text:
"Racer X is my friend :)"	
Output:
"x:1"

alphabet:
"123"
text:
"o hai"	
Output:
"no matches"
*/

function alphaCount(alphabet, text) {
  alphabet = alphabet.toLowerCase();
  text = text.toLowerCase();

  let result = [];
  let count = 0;
  for (let letter of alphabet) {
    count = 0;
    for (let char of text) {
      if (letter === char) {
        count++;
      }
    }
    if (count) {
      result.push(letter + ':' + count);
    }
  }
  if (result.length === 0) {
    return 'no matches';
  }
  return result.join(',');
}

// tests
console.log(alphaCount('123', '987') === 'no matches');
// NOTE: list results in the same order as the specified alphabet
console.log(alphaCount('aogeuh', 'uaoeuaoeuaoeuaoauoaeu') === 'a:6,o:5,e:4,u:6');
console.log(alphaCount('-+?', '10+4(4=2-11)?+1143') === '-:1,+:2,?:1');
console.log(alphaCount('i984', 'ti89') === 'i:1,9:1,8:1');
console.log(alphaCount('o', 'o_o;o-o ^o^ o//o o__o;o.o') === 'o:11');
console.log(alphaCount('hue_3', 'anlecxkac.gpaoo._43_') === 'e:1,_:2,3:1');
console.log(alphaCount('', ':P') === 'no matches');

