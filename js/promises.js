// Write a function named wait that accepts a number as a parameter,
//     and returns a promise that resolves after the passed number of milliseconds.
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// function wait(num){
//     return new Promise(function(resolve, reject){
//
//     setTimeout(resolve, num,)
//     });
// };
const fetch = require('node-fetch');


fetch("https://api.github.com/repos/svelazquez/codeup-web-exercises", {
    headers: {"Authorization": "w076f3ac78105b852397110f3dc7de323fe00d080"},
    }
    )
    .then(response => response.json())
    .then(data =>
        console.log(data.created_at)
    )
    .catch(error => console.error(error));



