const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        // console.log("Got user details from database.");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        // console.log("Got user details from database.");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()
// new is constructor function here.

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this

}

// const userOne = User("devottam", 12, true)
// const userTwo = User("ChaiAurCode", 15, false)

// console.log(userOne);
// console.log(userOne.username);

const userOne = new User("devottam", 12, true)
const userTwo = new User("ChaiAurCode", 15, false)

// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor);
console.log(userOne instanceof User);
console.log(userTwo instanceof User);
console.log(userThree instanceof User); //this will an error 

// new keywords create an empty object which is also called an instance of that object
// then a constructor function is called due to new keyword
// then all the areguements are injected with the help of this keyword
// In the fourth step, we can access the vaiables with those functions.