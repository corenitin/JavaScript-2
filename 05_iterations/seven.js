const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.map((num) => num * 2); // map method returns a new array with the results of calling a provided function on every element in the calling array.

// const newNum = myNums.map((num) => {
//     return num * 2
// }); 

// const newNum = myNums.forEach((num) => {
//     if(num >=1) {
//         console.log(num*2 ); // in forEach method, we can't return a new array. It just iterates over the array and does something with each element.
//     }
// })

const newNum = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 50); // chaining map method
console.log(newNum);
