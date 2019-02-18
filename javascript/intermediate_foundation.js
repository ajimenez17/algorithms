// Part 1

// 1. Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

// function sigma(num){
//     var sum = 0;
//     for(var i= 1; i <= num; i++){
//         sum = sum + i;
//     }
//     console.log(sum);
//     return sum;
// }
// sigma(5);

// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

// function factorial(num){
//     var result = 1;
//     for(var i= 1; i <= num; i++){
//         result = result*i;
//     }
//     console.log(result);
//     return result;
// }
// factorial(6);


// 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

// function fib(num) {
//     var a = 0
//     var b = 1;

//     while (num >= 0) {
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }
//     console.log(b);
//     return b;

// }
// fib(2);
// fib(3);
// fib(4);
// fib(5);
// fib(6);

// 4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

// function secondToLast(arr){
//     if(arr.length < 2){
//         var result = null;
//         console.log(result);
//         return result;
//     }
//     else {
//         var result = arr[arr.length-2];
//         console.log(result);
//         return result;
//     }
// }
// secondToLast([42, true, 4, "Liam", 7]);

// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

// function nthToLast(arr, num){
//     if(arr.length < 2){
//         var result = null;
//         console.log(result);
//         return result;
//     }
//     else {
//         var result = arr[arr.length-num];
//         console.log(result);
//         return result;
//     }
// }
// nthToLast([5,2,3,6,4,9,7],3);

// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

// function secondLargest(arr) {
//     var temp;
//     //Sorting the array first
//     for (var i = 0; i < arr.length - 1; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     //Once sorted, get the 2nd largest element
//     console.log(arr[1]);
//     return arr[1];
// }
// secondLargest([42, 1, 4, 3.14, 7]);


// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

// function doubleTrouble(arr){
//     var len = arr.length;
//     var temp = 0;
//     var l = 0
//     for(var i = 0; i < len*2 ; i+=2){
//         for(var c = arr.push(arr[i]) - 1; c > i + 1; c--){
//             temp = arr[c];
//             arr[c] = arr[c-1];
//             arr[c-1] = temp;
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// doubleTrouble([4, "Ulysses", 42, false]);

// Assignment: Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.

// function fib(num) {
//     if (num < 1) {
//         return 0;
//     }
//     else if (num == 1) {
//         return 1;
//     }
//     else {
//         result = fib(num - 1) + fib(num - 2);

//         return result;
//     }
//   }
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));


