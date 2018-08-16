// /*
// Challenge 1:
//
// Define a function named allIndexesOf that takes in two arguments. Array to search and value to search for.
// If item does not exist, return an empty array.
//
// Examples:
// function(fruits, "apple") should return the array [0,3]
// function(fruits, "guava") should return the array []
// function(fruits, "pineapple") should return [4];
//  */
//
// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// console.log(allIndexesOf(fruits, "apple"));
// console.log(allIndexesOf(fruits, "guava"));
// console.log(allIndexesOf(fruits, "pineapple"));
//
// function allIndexesOf(arr, value){
//     var index = [];
//     for(var i = 0; i<arr.length; i++) {
//         if (arr[i] == value) {
//             index.push(i);
//         }
//     }
//     return index;
// }
//
// /*
// Challenge 2:
//
// Define a function named removeAll(array,value) that takes in two arguments.
// Array and a value you want to remove.
//
// Examples:
// removeAll(bugs, "roach") should return the original array b/c "roach has no occurrances.
//
//  */
//
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));
// console.log(removeAll(fruits, "apple"));
//
// function removeAll(arr, value){
//         var index = [];
//         for(var i = 0; i<arr.length; i++) {
//             if (arr[i] != value) {
//                 index.push(arr[i]);
//             }
//         }
//         return index;
//     }
var testSentence = "I like to go to the movies with my friends";
console.log(longest(testSentence));

function longest (sentence){
    var longest = 0;

    var words = sentence.split(" ");
    for(var i = 0; i<words.length; i++){
        if(words[i].length > longest){
            longest = words[i].length;
        }
    }

    return longest;

}