// array

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]

// console.log(myArr[1]);
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);

console.log("C ", myArr);
