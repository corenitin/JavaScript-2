class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
const np = new Teacher( "Nitin", "nitin1306@gmail.com", "Nitin@7777");
np.addCourse();
np.logMe();

const nitin = new User("Osho")
nitin.logMe()

console.log(np instanceof Teacher);
