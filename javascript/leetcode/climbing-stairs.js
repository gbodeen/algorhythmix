/*
You are climbing a stair case. It takes n steps to 
reach to the top. Each time you can either climb 1 
or 2 steps. In how many distinct ways can you climb 
to the top?

Note: Given n will be a positive integer.
*/

// I recognize this; it's fibonacci.
var climbStairs = function (n) {
  let a = 1, b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a
};


// tests
console.log(climbStairs(1))
console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
console.log(climbStairs(7))
console.log(climbStairs(8))
console.log(climbStairs(9))
console.log(climbStairs(10))
