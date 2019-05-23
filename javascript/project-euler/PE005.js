/*
2520 is the smallest number that can be divided by 
each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly 
divisible by all of the numbers from 1 to 20?
*/

function lcm(a, b) {
  return a / gcd(a, b) * b;
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function PE005(n) {
  let multilcm = 1;
  for (let i = 2; i <= n; i++) {
    multilcm = lcm(multilcm, i);
  }
  return multilcm;
}


// tests
console.log(gcd(1, 1));
console.log(gcd(6, 9));
console.log(gcd(2, 5));
console.log(gcd(0, 7));
console.log(gcd(7, 0));
console.log(gcd(-7, -14));
console.log(gcd(-14, 21));
console.log(gcd(14, -21));
console.log(gcd(24, 36));
console.log(gcd(50, 20));
console.log(lcm(1, 1));
console.log(lcm(1, 0));
console.log(lcm(0, 8));
console.log(lcm(2, 3));
console.log(lcm(7, 5));
console.log(lcm(12, 6));
console.log(lcm(21, 14));
console.log(lcm(50, 20));
console.log(PE005(10));
console.log(PE005(20)); // 232792560
