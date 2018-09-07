const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//use filter to create an array of user objects where each user object has
// at least 3 languages in the language array
const result = users.filter( user => user.languages.length >= 3);
console.log(result);

//use map to create an array of strings where each element is a user's email address
const emails = users.map( user => user.email);
console.log(emails);

//use reduce to get the total years of experience from the list of users.
//Once you get the result, calculate the average

const exp = users.reduce((accumulator, current) => accumulator += current);
console.log(exp);
//use reduce to get the longest email from the list of users

//use reduce to get the list of user's names in a single string.
//Ex: your instructor's names are: mandy, billy, grim

//use reduce to get the unique list of languages from the list of users