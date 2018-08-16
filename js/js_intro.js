var myAge = prompt("How old are you?");
birthday(myAge);

function birthday(input){
    var ageNum = parseInt(input, 10);
    alert("happy birthday ^(^-^)^. You are " + ++ageNum + " years old");
}