function SetUsername(username) {
    // complex DB calls code here
    this.username=username
    console.log("called");
}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    // if used SetUsername(username), it only gives reference to SetUsername function but does not calls it and the values of SetUsername() function gets vanished as it gets removed from call stack from above
    // So to call SetUsername function we have to expilcitly use .call() method like SetUsername.call(this, username) to get the values of SetUsername function
    // In that SetUsername.call(this, username) method, this gives the current context to the variables of createUser function while not using it means context of variable of SetUsername() function which eventually get vanished once the function gets removed from call stack 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);