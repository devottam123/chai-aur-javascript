// const myArr = []
// %DebugPrint(myArr)

// To run the above code:
// 1) install jsvu
// 2) install v8-debug engine
// 3) open the directory where the code file is.
// 4)  Run the following command:
// ~/.jsvu/bin/v8-debug.cmd --allow-natives-syntax
// {d8>} promt will open
// 5) Execute the following code there:
// d8> const myArr = []
// d8> %DebugPrint(myArr)


// Two types of Arrays:
// Continuous(Packed), Holey Array

// Types of optimizations on arrays:
// SMI (small integer)
// Packed element
// Double(float, string, function)

// Arrays have its elements inside them while
// Objects have its Properties inside them

// const arrTwo = [1,2, ,4,5]
// This is an Holey Array


const arrTwo = [1,2,3,4,5]
// The above array has PACKED_SMI_ELEMENTS => It is most optimized array, by default array

arrTwo.push(6.0)
// Now that array has PACKED_DOUBLE_ELEMENTS
// Once an array is converted to PACKED_DOUBLE, it can't be changed to PACKED_SMI again, that is downgrade is allowed but upgrade is not allowed.

arrTwo.push('7')
// Now that array has PACKED_ELEMENTS

arrTwo[10] = 11
// Now that array has HOLEY_ELEMENTS

// console.log(arrTwo);
// console.log(arrTwo.length);
// console.log(arrTwo[9]);

// for console.log(arrTwo[19]); only bound checking is done and the value is returned as undefined if no value is there on at index and that index is out of bounds.
console.log(arrTwo[19]);

// for console.log(arrTwo[9]); following steps are followed:
// bound check => array for out of bounds is checked, result of which comes out to be false
// hasOwnProperty(arrTwo, 9) => then array.hasOwnProperty() function is checked result of which comes out to be false
// hasOwnProperty(arrTwo.prototype, 9) => then its prototypes are checked for 9
// hasOwnProperty(Object.prototype, 9) => then its Object's prototypes are checked for 9

// hasOwnProperty() check is one of the most expensive check in JS
// therefore, holes are very expensive in JS,
// Therefore, it is recommended to not jave holes in arrays in JS

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// Order of Optimization:
// SMI > DOUBLE > PACKED > HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED
 
const arrFour = new Array(3)
//  just 3 holes => HOLEY_SMI_ELEMENTS

arrFour[0] = '1'
arrFour[1] = '1'
arrFour[2] = '2'
// now HOLEY_SMI_ELEMENTS downgrades to HOLEY_ELEMENTS
// now this array can't be converted to HOLEY_SMI_ELEMENTS

// so, the above process can vbe optimized as:
const arrFive = [] //this is SMI array, which is most optimized
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(NaN) //now the array becomes PACKED_DOUBLE
arrSix.push(Infinity) //now the array becomes PACKED_DOUBLE

// for, for-of, forEach, etc. etc. => always try to use predefined methods in JS instead of creating your own methods for the same work, since, they are optimized in time to time, for eg, with each update of the browser.