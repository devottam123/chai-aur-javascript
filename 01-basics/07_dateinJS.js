// dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 27)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now()
// Gives time in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
// converts time from milliseconds to seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// Added 1 because month in JS starts from 0

// console.log(newDate.getDay());

console.log(newDate.toLocaleString());
console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))
