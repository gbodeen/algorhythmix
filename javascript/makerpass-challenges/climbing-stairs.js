/*
You are climbing a stair case. It takes n steps to reach to the top. Each 
time you can either climb 1 or 2 steps. In how many distinct ways can you 
climb to the top?
*/

// Top-down via recursion & memoization:
// function climbStairs (n) {
//   const memos = {};
//   const memoizedClimbStairs = n => {
//     if (n <= 3) return n;
//     if (!memos[n]) {
//       memos[n] = memoizedClimbStairs(n - 2) + memoizedClimbStairs(n - 1);  
//     }
//     return memos[n];
//   }
//   return memoizedClimbStairs(n);
// }

// Bottom-up via "dynamic programming"
// function climbStairs (n) {
//   const stair = [0, 1, 2];
//   for (let i = 2; i <= n+1; i++) {
//     stair[i] = stair[i - 1] + stair[i - 2];
//   }
//   return stair.pop();
// }

// and then because in retrospect it's just Fibonacci except at 0:
function climbStairs(n) {
  return n ? fibonacci(n) : 0;
}

function fibonacci(n) {
  let a = 1, b = 1;
  for (i = 1; i < n; i++) {
    [a, b] = [b, a + b]
  }
  return b;
}
// time complexity: O(n)
// space complexity: O(1)


// tests
console.log(climbStairs(0)); // 0
console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(8)); // 34
console.log(climbStairs(10)); // 89
console.log(climbStairs(15)); // 987
console.log(climbStairs(23)); // 46368
console.log(climbStairs(37)); // 39088169
console.log(climbStairs(49)); // 12586269025