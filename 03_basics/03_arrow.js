const user = {
    username: "Devottam",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }    
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    // console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
    // console.log(this);
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
//     // console.log(this);
// }

// chai()


// Explicit return type of arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));

// Implicit return type of arrow function
// const addTwo = (num1, num2) =>  num1 + num2;
// const addTwo = (num1, num2) =>  (num1 + num2);
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) =>  ({username: "hitesh"})
// console.log(addTwo(3, 4));
// For returning an object round brackets are compulsory.

// const myArray = [2,5,3,7,8]
// myArray.forEach(() => {
    
// })