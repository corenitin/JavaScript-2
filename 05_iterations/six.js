const coding = ["JavaScript", "Python", "Java", "C++", "Ruby", "C#"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item; // ForEach does not return anything
// })
// console.log(values);

const NUms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = NUms.filter( (num) => (num > 4)) // Callback function

// const newNum = NUms.filter( (num) => { //Scope open then use return keyword
//     return num > 4; // if you do not write return, it will return undefined
// })

// const newNum = []

// NUms.forEach( (num) => { // Using forEach
//     if(num > 4) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);

// here database gives you this kind of data
const books = [
  { title: "Book One", genre: "Fiction", author: "John Doe", pages: 400 },
  { title: "Book Two", genre: "Fiction", author: "Jane Doe", pages: 300 },
  { title: "Book Three", genre: "History", author: "John Smith", pages: 500 },
  { title: "Book Four", genre: "Science", author: "Jane Smith", pages: 600 },
  { title: "Book Five", genre: "Math", author: "John Doe", pages: 700 },
  { title: "Book Six", genre: "Fiction", author: "Jane Doe", pages: 800 },
];
// how user wants to see the data

const userBooks = books.filter((book) => book.author === "Jane Doe" && book.genre === "Fiction");
const userPages = books.filter((book) =>{
    return book.pages >= 500
});

const userGenre = books.forEach((book) => {
    if(book.genre === "Fiction") {
        console.log(book);
    }
})

// console.log(userBooks);


// console.log(userPages);

