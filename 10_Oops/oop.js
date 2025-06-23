// const { use } = require("react");

// Object Literal
// const user = {
//     username: "Sandesh",
//     logincount: 9,
//     singedIn: true,

// getuserdetails: function() {
// console.log("Got user details");
// console.log(`Username: ${this.username}`);
// console.log(this);
// }
// }
// console.log(user.username);
// console.log(user.getuserdetails);
// console.log(this);

// constructor Function 
// const promiseone = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userone = new User("sandesh", 26, true);
const userTwo = new User("Hello", 16, true)
console.log(userone);