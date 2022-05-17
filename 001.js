//Solution 1: Using a for loop 
// function sumTo(n) {
//     let total = 0;
//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total
// }


//Solution 2: Using artithmetic progression 
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }

//solution 3: Using recursion
function sumTo(n) {
    if (n === 1) {
        return 1;
    }
    return n + sumTo(n - 1);
}

const test = sumTo(3);

console.log(test);  