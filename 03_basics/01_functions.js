function sayMyName() {
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("O");
    console.log("T");
    console.log("T");
    console.log("A");
    console.log("M");
}

// sayMyName //This is function reference.
// sayMyName(); //This is function execution.

// function addTwoNumbers(number1, number2){ //number1 and number2 are parameters here
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){ //number1 and number2 are parameters here
    // let result=number1+number2;
    // return result;

    return number1 + number2;    
    console.log("Devottam");
}
// addTwoNumbers(3, null) //3 and null are arguements here
const result = addTwoNumbers(3, 5) //3 and 5 are arguements here

// console.log("Result :", result);

// function loginUserMessage(username){
//     return `${username} just logged in`    
// }

// console.log(loginUserMessage("Devottam"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username.")
//         return
//     }
//     return `${username} just logged in`   
// }

// console.log(loginUserMessage("Devottam"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in`   
}

// console.log(loginUserMessage("Devottam"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in`   
}

// console.log(loginUserMessage("Devottam"))
// console.log(loginUserMessage())
// console.log(loginUserMessage(""))

// ... is known as both rest and spread operator, It's name epends upon the usecase, that is where it is used. 
function calculateCartPrice(val1, val2, ...num1) {
    return num1    
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 1200000))

// Passing an object in a function
// const user = {
//     username: "devottam",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)    
// }

// handleObject(user);
// handleObject({
//     username: "sam",
//     price: 399
// });

// Passing an array in a function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));