// Primitive Datatypes

// 7 types:
// 1) String
// 2) Number
// 3) Boolean
// 4) null
// 5) undefined
// 6) symbol
// 7) BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')
// console.log(id==anotherId)
// console.log(id===anotherId)

// const bigNumber = 2342354322454532232454433n


// Reference Datatypes (Non primitive)

// Arrays
// Objects
// Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function () {
    console.log("Hello World")
}

// myFunction();

// console.log(typeof outsideTemp);
// console.log(typeof heros);

// For all the non-primitive datatypes, the tyoeof function will give object as a result except Functions.
// For Functions typeof will give function only as a result.

// console.log(anotherId);

// **********************************************

// Stack (Primitive), Heap (Non-Primitive)

// In stack, copy of the Primitive variables are formed.
// In Heap, reference to the original value is created which alters the original non-primitive variables.

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);