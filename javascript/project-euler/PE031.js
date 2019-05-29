/*
In England the currency is made up of pound, £, and pence, p, 
and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/


class PE031 {
  countChangeWays(n = 200) {
    const coins = [2, 5, 10, 20, 50, 100, 200];
    let results = Array(n + 1).fill(1);
    for (let c of coins) {
      for (let p = 0; p <= n; p++) {
        results[p] += p >= c ? results[p - c] : 0;
      }
    }
    return results[n];
  }

  static main() {
    const test = new PE031();
    console.log(test.countChangeWays(1)); // 1
    console.log(test.countChangeWays(2)); // 2
    console.log(test.countChangeWays(3)); // 2
    console.log(test.countChangeWays(4)); // 3
    console.log(test.countChangeWays(5)); // 4
    console.log(test.countChangeWays(10)); // 11
    console.log(test.countChangeWays(200)); // 73682
  }
}


// tests
PE031.main();
