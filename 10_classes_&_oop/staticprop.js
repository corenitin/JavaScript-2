class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username:${this.username}`);
  }
  static createId() {
    // static stops for multiple access of the id
    return `123`;
  }
}

const nitin = new User("nitin");
// console.log(nitin.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const android = new Teacher("Oppo", "oopo@gmail.com");
console.log(android.createId());
