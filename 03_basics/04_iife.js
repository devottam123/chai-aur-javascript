// Immediately Invoked Function Expression
// VVIP: Always stop a IIFE with a ';' as it doesn't know where to stop it's execution.

// Named IIFE, since it has a name 'chai'
(function chai(){
    console.log(`DB CONNECTED`);
})();

// Simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Devottam');

// chai()

