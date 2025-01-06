// let myName = "Nitin  "
// console.log(myName.length);

//Array
let myHeros = ["thor", "spiderman"]

//Object
let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.nitin = function () {
    console.log(`nitin present in all objects`);
}

Array.prototype.hynitin = function () {
    console.log(`hy nitin parmar`);
}
// heroPower.nitin();
// myHeros.nitin()
// myHeros.hynitin()

// inheritance

const User ={
    name: 'nitin',
    email: 'nitin@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TAsupport = {
     makeAssignment: 'JS assignment',
     fullTime: true,
     __proto__: TeacherSupport
}
Teacher.__proto__ = User

// modern syntax for inheritance
Object.setPrototypeOf(TeacherSupport, Teacher)

//String

const anotherName = "             nitinparmar       "
String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherName.trueLength()

// Direct access
"nitin".trueLength()