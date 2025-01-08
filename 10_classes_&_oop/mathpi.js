const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); // getOwnPropertyDescriptor talks about hidden features
// console.log(descripter);

// console.log(Math.PI);

const course = {
  name: "web dev",
  price: 999,
  isAvailable: true,

  parmar: function () {
    console.log("code sucks");
  },
};
// console.log(Object.getOwnPropertyDescriptor(course, "name"));
// console.log(Object.getOwnPropertyDescriptor(course, "price"));
// console.log(Object.getOwnPropertyDescriptor(course, "isAvailable"));

// Object.defineProperty(course, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(course, "name"));

for (let [key, value] of Object.entries(course)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
