/*
Given an alphabet, an offset, a message, and a command, encode or decode 
the message by translating each letter in the given alphabet by the offset 
amount. Each letter in the message will basically “shift” by the offset 
amount (if the letter is a part of the alphabet).
*/

function cipher(alpha, offset, message, command) {
  if (command === "decode") offset *= -1;

  const dict = {}, L = alpha.length;
  for (let i = 0; i < L; i++) {
    dict[alpha[i]] = alpha[(i + offset + L) % L]
  }

  return message
    .split('')
    .map(char => dict[char] || char)
    .join('');
}
// time complexity: O(N) for message length N
// space complexity: O(M) for alpha length M


// tests:
console.log(cipher("abcde", 1, "hallo thara", "decode")); // hello there
console.log(cipher("abcde", 1, "bbc", "encode")); // ccd
console.log(cipher("abcde", 1, "hello there", "encode")); // hallo thara
console.log(cipher("abcdefghijklmnopqrstuvwxyz", 5, "hello there", "encode")); // mjqqt ymjwj
console.log(cipher("abcde", 2, "bbc", "encode")); // dde
console.log(cipher("abcde", 4, "bbc", "encode")); // aab
console.log(cipher("abcdefghijklmnopqrstuvwxyz", 5, "mjqqt ymjwj", "decode")); // hello there
console.log(cipher("x y", 1, "xyz xyz", "encode")); //  xzy xz