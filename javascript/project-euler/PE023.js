/*
A perfect number is a number for which the sum of its proper divisors is 
exactly equal to the number. For example, the sum of the proper divisors 
of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect 
number.

A number n is called deficient if the sum of its proper divisors is less 
than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the 
smallest number that can be written as the sum of two abundant numbers is 
24. By mathematical analysis, it can be shown that all integers greater 
than 28123 can be written as the sum of two abundant numbers. However, 
this upper limit cannot be reduced any further by analysis even though it 
is known that the greatest number that cannot be expressed as the sum of 
two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the 
sum of two abundant numbers.
*/

class PE023 {
  divisors(n) {
    if (n <= 1) return [n];
    const divs = [1];
    const sqrtN = Math.sqrt(n);
    for (let i = 2; i < sqrtN; i++) {
      if (n % i == 0) {
        let L = (divs.length + 1) / 2;
        divs.splice(L, 0, i, n / i);
      }
    }
    if (sqrtN % 1 == 0) {
      let L = (divs.length + 1) / 2;
      divs.splice(L, 0, sqrtN);
    }
    return divs;
  }

  isAbundant(n) {
    return this.divisors(n).reduce((sum, num) => sum + num) > n;
  }

  makeAbundantsList() {
    this.abundants = {};
    for (let i = 1; i <= 28123; i++) {
      if (this.isAbundant(i)) {
        this.abundants[i] = true;
      }
    }
    return false;
  }

  isSumOf2Abundants(n) {
    if (!this.abundants) {
      this.makeAbundantsList();
    }
    for (let key in this.abundants) {
      if (this.abundants[n - key]) return true;
    }
  }

  unabundance() {
    let sum = 0;
    for (let i = 1; i <= 28123; i++) {
      if (!this.isSumOf2Abundants(i)) sum += i;
    }
    return sum;
  }
}


// tests
const test = new PE023();
console.log(test.divisors(1));
console.log(test.divisors(2));
console.log(test.divisors(3));
console.log(test.divisors(4));
console.log(test.divisors(5));
console.log(test.divisors(6));
console.log(test.divisors(60));
console.log(test.divisors(61));
console.log(test.isAbundant(11));
console.log(test.isAbundant(12));
console.log(test.isAbundant(16));
console.log(test.isAbundant(18));
console.log(test.isAbundant(100));
console.log(test.isAbundant(105));
test.makeAbundantsList();
console.log(test.abundants);
console.log(Object.keys(test.abundants).length);
console.log(test.isSumOf2Abundants(24));
console.log(test.isSumOf2Abundants(23));
// console.log(test.unabundance()); // 4179871