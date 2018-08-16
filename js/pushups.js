
//function that accepts a number.
//for loop that iterates from 1 to that number.
//if any of the numbers are divisible by 3, print fizz
//if any number is divisible by 5, print buzz
var num = prompt("Enter ceiling number");
fizz(num);

function fizz(num){
        for(var i = 0; i<=num; i++){
            if(i%3 == 0){
                console.log(i + ": fizz");
            } else if(i%5 == 0){
                console.log(i + ": buzz");
            } else if(i%3 == 0 && i%5 == 0) {
                console.log(i + ": fizzbuzz");
            }else{
                console.log(i + ": not divisible");
            }
        }
}