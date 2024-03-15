// Q. Display the original properties of an array.
// A. Concept -> By using prototype we can insert new properties in an array, but those will not be considered as original properties. 
// So, to get original properties just add a check to array elements using hasOwnProperty syntax.

myNewArray = [1,2,3,4,5]

Array.prototype.extraProperty = "hitesh"

for(let v in myNewArray){
    console.log(v);
}
// The above one is the wrong anser since it will give our own made property too as the anwser

// But, the answer below will give only original properties of Array not our own created ones since it uses .hasOwnProperty() function
for(let v in myNewArray){
    if (myNewArray.hasOwnProperty(v)){
        console.log(v);
    }
}