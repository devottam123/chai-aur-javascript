// let and const have block scope.
// var has function scope.

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);

