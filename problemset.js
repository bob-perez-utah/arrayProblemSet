
// max() , write a function max() that accepts an array of numbers and returns the maximium number in 
// the array
function max(arr) {
    
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
        console.log("Max number in max() function = " + max);
        return max;
        
}



// sumArray() , Write a function sumArray() that accepts and array of numbers and returns the sum of all
// numbers the sum of all numbers in the array.
function sumArray(arr) {
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
    

    var first = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            console.log("Array elements are not all identical");
            return false;
        } 
    }
        console.log("Array elements are all identical");
        return true;
        
}



// printReverse() , Write a function printReverse() that takes an array as an argument and prints out
// the elements in the array in reverse order (don't actually reverse the array itself).
function printReverse(arr) {
    
    for (var i = arr.length - 1; i >= 0; --i){
        console.log("//" + arr[i] + "\n");
    }
}

max([99, -1, 17, 88, 2, 1, 18, 7888, 4, 98]);
sumArray([7,3,1, -1, 100]);
isUniform([1,1,1,4]);
printReverse([1,2,3,4,5,6,7,8,9,10]);
printReverse(["a", "b", "c"]);