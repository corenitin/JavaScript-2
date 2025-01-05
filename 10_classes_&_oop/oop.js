// obeject literal
const user = {
  username: "johnDoe",
  age: 30,

  getUserDtails: function () {
    // console.log("Got user details from databse");
    console.log(`Username: ${this.username}`); // this refers to the user object if you cant use this it will give u errorz
    console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDtails());
// console.log(this);

// - Constuctor Function - // it will give the copy of function it will not effect the original function or any other function
// new, this
function Username(username, loginCount, isLoggedIN) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIN = isLoggedIN;

  this.greeting = function () {
    console.log(`Welcome: ${this.username}`);
  };

  return this;
}
// when you add new keyword it will create new object or copy of the obj
const userOne = new Username("Nitin", 7, true);
const userTwo = new Username("Parmar", 2, false);
console.log(userOne.constructor);
// console.log(userTwo);

/* Note: when you use new keyword frist of all emply object create{}(instance) 
        step 1: new object created
        step 2: constructor function will call because of new keyword
        step 3: all the arguments will inject in this keyword
        step 4: it will shown in functions


*/
