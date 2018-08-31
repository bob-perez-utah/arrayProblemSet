var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var letters = ["a", "b", "c", "d", "e", "f"];


// max() , write a function max() that accepts an array of numbers and returns the maximium number in 
// the array
function max(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
        console.log("Max number in max() function = " + max);
        return maxIndex;
        
}



// sumArray() , Write a function sumArray() that accepts and array of numbers and returns the sum of all
// numbers the sum of all numbers in the array.
function sumArray(arr) {
    if (arr.length === 0){
        return -1;
    }


    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    console.log("sumTotal() function total = " + total);
    return total;

}



// isUniform(), Write a function isUniform() which takes an array as an argument and returns true
// if all elements in the array are indentical.
function isUniform(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var indexVal = arr[0];
    var isSame = arr.length;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== indexVal) {
            --isSame;
        } 
    }
        
        if (isSame === arr.length) {
            console.log("isUniform() function result = true")
            return true;
        } else {
            console.log("isUniform() function result = false")
            return false;
        }
        
}



// printReverse() , Write a function printReverse() that takes an array as an argument and prints out
// the elements in the array in reverse order (don't actually reverse the array itself).
function printReverse(arr) {
    if (arr.length === 0) {
        return -1;
    }

    for (var i = arr.length - 1; i >= 0; --i){
        console.log("//" + arr[i] + "\n");
    }
}

max([99, -1, 17, 88, 2, 1, 18, 7888, 4, 98]);
sumArray([7,3,1, -1, 100]);
isUniform(["a", "b", "a"]);
printReverse([1,2,3,4,5,6,7,8,9,10]);
printReverse(["a", "b", "c"]);