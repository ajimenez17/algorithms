// JS function that reverses an Array
// May 7, 2019ß

function reverseArr(input) {
    var newArray = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        newArray.push(input[i]);
    }
    return newArray;
}

var a = [3,5,7,8,4]
var b = reverseArr(a);
console.log(b)

