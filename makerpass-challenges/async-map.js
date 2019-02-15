/*
Implement the function asyncMap:

asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.

The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

The order of these results should be the same as the order of the tasks.
It is important to note that this is not the order in which the tasks return,
but the order in which they are passed to asyncMap.

Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
on the results array.

Example:

asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });
 */

const asyncMap = function (tasks, callback) {
  const results = Array(tasks.length);

  let count = 0;
  const cb = (x, i) => {
    results[i] = x;
    count++;
    if (count === tasks.length) {
      callback(results);
    }
  }

  tasks.forEach((task, i) => task(x => cb(x, i)));
};
// No use of promises or async/await needed.
// Promise.all plus bluebird's Promise.promisify would be another nice solution.


// tests
// easy: two tasks that resolve in order
function wait2For2(callback) {
  setTimeout(function () {
    callback(2);
  }, 2);
}
function wait3For1(callback) {
  setTimeout(function () {
    callback(1);
  }, 3);
}
asyncMap([wait2For2, wait3For1], function (arr) {
  console.log(arr.length === 2 && arr[0] === 2 && arr[1] === 1); // true
});
// medium: out of order resolution
asyncMap([wait3For1, wait2For2], function (arr) {
  console.log(arr.length === 2 && arr[0] === 1 && arr[1] === 2); // true
});
// hard: more tasks, still out of order
function wait5For4(callback) {
  setTimeout(function () {
    callback(4);
  }, 5);
}
function wait1For3(callback) {
  setTimeout(function () {
    callback(3);
  }, 1);
}
function wait1For5(callback) {
  setTimeout(function () {
    callback(5);
  }, 1);
}
asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function (arr) {
  console.log(arr.length === 5 && arr[0] === 1 && arr[1] === 2 &&
    arr[2] === 3 && arr[3] === 4 && arr[4] === 5); // true 
});

