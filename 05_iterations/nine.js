const myNums = [1, 2,3 ]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc}, currval: ${currval}`); 
//     return acc + currval
// }, 0) // if you give any number here, it will be the initial value of acc

// Using arrow function
const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
// console.log(myTotal) // 6;

const shoppingCart = [
    { product: 'phone', qty: 1, price: 699 },
    { product: 'Screen Protector', qty: 1, price: 9.98 },
    { product: 'Memory Card', qty: 2, price: 20.99 },
    { product: 'Headphones', qty: 1, price: 49.99 }
]

const newCart = shoppingCart.reduce((acc, item) => acc + item.price, 0) 
console.log(newCart);
