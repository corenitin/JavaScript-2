// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const panipuri = new User("panipuri", "panipuri@gmail.com", "panipuri@123");
// console.log(panipuri.encryptPassword());
// console.log(panipuri.changeUsername());

// behind the scene process
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const panipuri = new User("panipuri", "panipuri@gmail.com", "panipuri@123");
console.log(panipuri.encryptPassword());
console.log(panipuri.changeUsername());
