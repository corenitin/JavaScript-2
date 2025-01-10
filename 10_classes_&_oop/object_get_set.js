const User = { 
  _name: "nitin parmar",  // _ (underscore) and # (hash) define that it is a private property
  _email: "n@nitin.com",
  _password: "nitin@7777",

  get name() {
    return this._name.toUpperCase();
  },
  set name(value) {
    this._name = value;
  },

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._password = value;
  },

  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value.toUpperCase();
  },
};
console.log(User.name);
console.log(User.email);
console.log(User.password);
