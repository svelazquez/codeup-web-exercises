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

//     Use .filter to create an array of user objects where each user object
//      has at least 3 languages in the languages array.
        const result = users.filter( user => user.languages.length > 2);
        console.log(result);
//     Use .map to create an array of strings where each element
//      is a user's email address
        const emails = users.map ( users => users.email);
        console.log(emails);

//     Use reduce to get the total years of experience from the list of users.
//      Once you get the total of years you can use the result to calculate the average.

        const exp = users.reduce ((total, users) =>
            total + users.yearsOfExperience, 0
        );
        console.log(exp);

//     Use reduce to get the longest email from the list of users.
        const longboi = emails.reduce((total, email) => {
                if (email.length > total.length)
                    return email;
                else
                    return total;
            }
        , "");
        console.log(`longest is ${longboi}`);

//     Use reduce to get the list of user's names in a single string.
//      Example: Your instructors are: ryan, luis, zach, fernando, justin.
        const names = users.reduce ((total, users) =>
            total + " " + users.name,
        '');
        console.log(`Your instructors are${names}`);

//     Use reduce to get the unique list of languages from the list of users.
        const langs = users.reduce ((total, users) =>

                total + users.languages + "\n"
            , '');
        console.log(langs);