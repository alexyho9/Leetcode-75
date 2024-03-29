// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(arr, fn) {
    let n = arr[0];
    if (arr.length < 1) return false;
    if (fn(n) === true) return true;
    return someRecursive(arr.slice(1), fn);
}