// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// == and other rest operators work differently
// Other rest operators(such as >, <, >= and <=) convert null to 0 and then compare them!

// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined > 0);

// undefined works coreectly in JS(as expected)

// conversions as above are avoided in production, since they produce confusion 


// === (strict check)
// console.log("2" === 2);