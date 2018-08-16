// var num = prompt("Enter a number: ");
// showMultiplicationTable(num);
//
// function showMultiplicationTable(num){
//     for(var i = 1; i <= 11; i++){
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }
//
// for(var i = 0; i<10; i++){
//     var rand = Math.floor(Math.random()* 180) + 20;
//     if(rand % 2 == 0){
//         console.log(rand + " is even");
//     } else {
//         console.log(rand + " is odd");
//     }
// }
//
for(var i = 1; i<= 10; i++){
    for(var j = 0; j < i; j++){
        console.log(i);
    }
}

//
// for(var i = 100; i>= 5; i-=5){
//     console.log(i);
// }


console.log(fib(10));

for(var i = 0; i <= 10; i++){
    console.log(i + "th term is " + fib(i));
}



function fib(n) {
    if (n < 2) 
        return n;
    return (fib(n - 1) + fib(n - 2));
}
