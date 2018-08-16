var squared = 2;
var count = 0;
while(count< 15){
    console.log(squared *= 2);
    count++;
}

var totalCones = Math.floor(Math.random() * (100- 50) + 50);
var conesSold = Math.floor(Math.random() * 5) + 1;
while(totalCones > 0){
    console.log(totalCones + " cones remaining");
    conesSold = Math.floor(Math.random() * 5) + 1;
    if(conesSold <= totalCones){
        console.log(conesSold + " cones sold");
        totalCones -= conesSold;
    } else if (conesSold > totalCones){
        console.log(conesSold+" cones boi? Only " + totalCones + " cone boi, what's your build, boi?");
    }
}
console.log("All cones sold");

