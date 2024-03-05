// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)
// const newNums = myNumbers.map( (num) => { return num + 10})

// console.log(newNums);

// difference between forEach and map is only that forEach doesm't return anything so it's result can't be stored in a variable,
// whereas result of map can be stored in a variable.

// chaining of array functions
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumbers
                .map((num) => num*10)
                .map((num) => num+1 )
                .filter((num) => num>=40)

console.log(newNums);