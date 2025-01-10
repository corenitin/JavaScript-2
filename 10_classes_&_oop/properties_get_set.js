// Old way of using getter setter method

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {// defineProperty is actually getter setter property
    get: function () {
        return this._email.toUpperCase()
    },
    set: function (value) {
        this._email = value
    },
  }); 
  Object.defineProperty(this, "password", {// defineProperty is actually getter setter property
    get: function () {
        return this._password.toUpperCase()
    },
    set: function (value) {
        this._password = value
    },
  }); 
}

const nitin = new User("np@gmail.com", "Nitin@123")
console.log(nitin.password);
console.log(nitin.email);