// let myName = "hitesh     "
// let myChannel = "chai     "

// console.log(myName.trim().length)
// we have to create our own method which gives the result same as above line.
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:  "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log('hitesh is present in all objects.');
}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says Hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh() //this will give an error

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__: TeachingSupport    
}

// console.log(TASupport.isAvailable); 
// Here, TeachingSupport is the parent object and TASupport is the child object which inherits the properties of TeachingSupport

// Teacher.__proto__ = User
// console.log(Teacher.name);
// Here, User is the parent object and Teacher is the child object which inherits the properties of User

// modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TeachingSupport.makeVideo);
// Here, Teacher is the parent object and TeachingSupport is the child object which inherits the properties of Teacher

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh   ".trueLength()
"iceTea".trueLength()