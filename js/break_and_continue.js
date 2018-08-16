do{
    var num = prompt("Enter an odd number");
}while(num % 2 == 0);

alert("Number to skip is: " + num);

for(var i = 1; i < 50; i +=2){
    if (i == num) {
        console.log("Skipping number " + num);
        continue;
    }
    console.log("Here is an odd number: " + i);

}