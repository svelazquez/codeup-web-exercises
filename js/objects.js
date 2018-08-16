(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        first: "rick",
        last: "sanchez",
        hello(){
            console.log("hell0");
        }
    };
    //
    // person.first = "rick";
    // person.last = "sanchez";
    // person.hello = function(){
    //     console.log("hello from " + this.first + " " + this.last);
    // };

    console.log(person.first);
    console.log(person.last);
    person.hello();



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //see above



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
     discountAmt(shoppers);

     function discountAmt(arr){
         var discount;
         for (var i = 0; i<arr.length; i++) {
             if (arr[i].amount >= 200) {
                 discount = .12;
                 console.log("Name: " + arr[i].name +
                     "\nAmt before discount: $" + arr[i].amount.toFixed(2) +
                     "\nAmt after discount: $" + (arr[i].amount * discount).toFixed(2));
             }
         }
     }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
        //create function that accepts title and author.
        //returns book object
        function createBook(title, author){
            var authorArr = author.split(" ");
            var book = {
                title: title,
                author: {
                    first: authorArr[0],
                    last: authorArr[authorArr.length - 1]
                }
            }
            return book;
    }

    var books = [createBook("Living the Dream", "Matt Bryer"),
                createBook("Chuddup: The Taco American Story", "Leonardo Ignacio Amaro"),
                createBook("The Salmon of Doubt", "Douglas Adams")
                ];


    function showBookInfo(books){
        for(var i = 0; i<books.length; i++) {
            console.log("Book # " + (i+1)  +
                "\nTitle: " + books[i].title +
                "\nAuthor: " + books[i].author.first + " " +
                books[i].author.last);
            console.log("---");
        }
    }

    showBookInfo(books);

    // var books = [
    //     {
    //         title: "Living the Dream",
    //         author: {
    //             first: "Matt",
    //             last: "Bryer"
    //         }
    //     },
    //     {
    //         title: "Chuddup: The Taco American Story",
    //         author: {
    //             first: "Leonardo",
    //             last: "Amaro"
    //         }
    //     },
    //     {
    //         title: "The Salmon of Doubt",
    //         author: {
    //             first: "Douglas",
    //             last: "Adams"
    //         }
    //     },
    //     {
    //         title: "Cash Out",
    //         author: {
    //             first: "Calvin",
    //             last: "Harris"
    //         }
    //     },
    //     {
    //         title: "Backseat Wannabe",
    //         author: {
    //             first: "Dot",
    //             last: "O"
    //         }
    //     }
    // ];
    //
    // for(var i = 0; i<books.length; i++) {
    //     console.log("Book # " + (i+1)  +
    //         "\nTitle: " + books[i].title +
    //         "\nAuthor: " + books[i].author.first + " " +
    //         books[i].author.last);
    //     console.log("---");
    // }

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

        //see above



})();
