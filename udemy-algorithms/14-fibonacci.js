// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    // add whatever parameters you deem necessary - good luck!
    if (n <= 2) return 1;
    return fib(n - 2) + fib(n - 1);
}

console.log(fib(4));    // 3
console.log(fib(10));   // 55
console.log(fib(28));   // 317811
console.log(fib(35));   // 9227465