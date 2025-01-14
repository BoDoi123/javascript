// VD1: Tính N! = N * (N - 1)!
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

let result = factorial(5);

console.log(result);

// VD2: Dãy Fibonacci: F1 = 1, F2 = 1, Fn = F(n - 1) + F(n - 2).
function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

result = fibonacci(10);

console.log(result);
