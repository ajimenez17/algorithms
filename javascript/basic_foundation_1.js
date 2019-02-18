
// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

// function printArray(a) {
//     var arr = [];
//     for (var i = 1; i <= a; i++) {
//         arr.push(i);
//     }
//     console.log(arr)
// }
// printArray(255);

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

// function sumEven(n) {
//     var sum = 0;
//     for (i = 1; i <= n; i++) {
//         if (i % 2 == 1) {
//         }
//         else {
//             sum = sum + i;
//         }
//     }
//     console.log(sum);
// }
// sumEven(100);


// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

// function sumOdd(n) {
//     var sum = 0;
//     for (var i = 0; i <= n; i++) {
//         if (i % 2 == 0) {
//         }
//         else {
//             sum = sum + i;
//         }
//     }
//     console.log(sum);
// }
// sumOdd(5000);

// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

// function iterateArray(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     console.log(sum);
// }
// var b = [1,2,5];
// var c = [-5,2,5,12];
// iterateArray(b);
// iterateArray(c);


// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

// function findMax(arr) {
//     var max = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max)
// }
// var b = [-3,3,5,7];
// findMax(b);


// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

// function findAvg(arr){
//     var sum = 0;
//     for (i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     var avg = sum/(arr.length);
//     console.log(avg);
// }

// var c = [1, 3, 5, 7, 20];
// findAvg(c);


// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

// function oddArray(n) {
//     var arr = [];
//     for (i = 0; i <= n; i++) {
//         if (i % 2 == 1){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// result = oddArray(7);
// console.log(result);

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

// function greaterValue(arr, y){
//     var counter = 0;   
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] > y) {
//             counter++;
//         }
//     }
//     return counter;
// }
// var result  = greaterValue([1,3,5,7], 3);
// console.log(result);


// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// function squares(arr){
//     for(i = 0; i < arr.length; i++){
//         arr[i] *= arr[i]
//     }
//     return arr;
// }
// console.log(squares([1,5,10,-2]));


// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0]

// function replaceNegatives(arr){
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = arr[i]*(-1);
//         }
//     }
//     return arr;
// }
// var newArr = replaceNegatives([1,3,-2,-2,1]);
// console.log(newArr);

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

// function getStats(arr) {

//     var min = arr[0];
//     var max = arr[0]
//     var sum = 0;

//     for(i = 0; i < arr.length; i++){
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min){
//             min = arr[i];
//         }
//         sum = sum + arr[i]
//     }
//     var avg = sum/(arr.length);
//     var stats = [];
//     stats.push(max, min, avg);

//     return stats;
// }

// var array = getStats([1,5,10,-2]);
// console.log(array);


// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

// function swapValues(arr) {
//     var arr = arr;
    
//     if (arr.length < 4) {
//         console.log('Your Array needs to contain at least 2 values')
//     }
//     else {
//         var temp = arr[0];
//         arr[0] = arr[arr.length-1];
//         arr[arr.length-1] = temp;
//     }
//     console.log(arr);
// }
// swapValues([1, 5, 10, -2]);



// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

// function numberToString(arr){

//     for(i = 0; i < arr.length; i++){
//         if (arr[i] < 0){
//             arr[i] = 'Dojo';
//         }
//     }
//     return arr;
// }
// var array = numberToString([-1,-3,2]);
// console.log(array);

// practice max 




