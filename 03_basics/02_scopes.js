// let and const have block scope.
// var has function scope.

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("Inner: ", a);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// function one() {
//     const username = "devottam"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two();
// }

// one();

if (true) {
    const username = "Devottam"
    if (username === "Devottam") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// *******************Interesting******************
// Basic Function 
console.log(addone(5))
function addone(num) {
    return num + 1
}
//Basic functions are hoisted 

// Expression of Function
console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2    
}
// const and let varibables's declaration are hoisted but go in temporal dead zone just before initialization, that's why giving error
