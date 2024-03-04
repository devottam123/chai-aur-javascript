// const userEmail = "d@devottam.ai"
// const userEmail = ""
const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user Email.");
// }

// falsy Values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// "0", 'false', " ", [], {}, function(){} and all the values other than above falsy values are truthy values.

// if (userEmail.length === 0) {
//      console.log("Array is empty.");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Caolescing Operator (??): here we have to work upon two keywords known as nul and undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1);

