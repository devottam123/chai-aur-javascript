// Q. Implement a custom forEach in javascript

myArr = [1,2,3,4]

// Basic Method
Array.prototype.customForEachOne = function (callback){
    for(let i=0; i < this.length; i++){
        callback(this[i], i, this)        
    }
}

myArr.customForEachOne( function (val1, val2, val3){
    console.log(val1, val2, val3)
} )

// SDE-2,3 Method
Array.prototype.forEachTwo = function (callback, thiscontext) {
    if(typeof callback !== 'function'){
        throw `not a function`        
    }

    const length = this.length

    let i = 0
    while (i < length) {
        if (this.hasOwnProperty) {
            callback.call(thiscontext, this[i], i, this)
        }
        i++
    }
}

myArr.customForEachOne( function (val1, val2, val3){
    console.log(val1, val2, val3)
} )
