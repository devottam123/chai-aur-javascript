// objects can be defined in two ways:
// 1) As literals
// 2) As Constructors

// When the objects are made with constructors, then singleton objects are created.
// When the objects are made with literals,  their multiple instances are formed.

// Using Constructors
// Object.create

// object literals
const mySym = Symbol("key1")
const JSuser = {
    name: "Hitesh",
    "full name": "Devottam Vaishnav",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "devottam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JSuser.email);
// console.log(JSuser["email"]);

// console.log(JSuser.full name); //This will throw an error in this case.
// console.log(JSuser["full name"])

// Declaring and calling a symbol in the object
// console.log(JSuser[mySym])

// JSuser.email = "devottam@chatgpt.com"
// Object.freeze(JSuser)
// JSuser.email="devottam@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function() {
    console.log("Hello JS user!")
}

JSuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JSuser)
// console.log(JSuser.greeting)
console.log(JSuser.greeting())
console.log(JSuser.greetingTwo())