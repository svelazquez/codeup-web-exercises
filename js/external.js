const RATE = 3;
console.log("Hello from external JavaScript");

alert("Welcome to my website");
var color = prompt("What is your favorite color?");

alert("Great, my favorite color is " + color + " too");

var movie, days, price1, total;

var num = prompt("How many movies are you renting?");

var loop = 0;
var total = 0;
do {
    movie = prompt("Type title");
    days = prompt("How many days?");
    price1 = movies(movie, days);
    total += price1;
    loop++;
} while (loop < num);

alert("Total price = $" + total);



function movies(movie, days){
    var price = days * RATE;
    alert("Your movie " + movie + " will be "+ price);
    return price;
}


var name = "steph";
sayHello(name);

function sayHello(name){
    alert("hello " + name);
}