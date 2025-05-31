const user ={
    username : "sandesh",
    price: 999,

    welcomeMsg : function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
user.welcomeMsg()
user.username ="Sam"
user.welcomeMsg()
console.log(this);

function chai() {
    // We do not used this keyword inside the function
    let userName = "Sandesh"
    console.log(this.userName)
}
chai()
















