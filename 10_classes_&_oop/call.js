function SetUsername(username) {
  // complex DB calls
  this.username = username;
}

function createUser(username, email, password) {
  SetUsername.call(this,username);
  this.email = email;
  this.password = password;
}

const nitin = new createUser("nitin", "nitin@gmail.com", "123");
console.log(nitin);
