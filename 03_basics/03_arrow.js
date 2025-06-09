// const user ={
//     username : "sandesh",
//     price: 999,

//     welcomeMsg : function () {
//         console.log(`${this.username}, welcome to website`);
//         // console.log(this);
        
//     }
// }
// user.welcomeMsg()
// user.username ="Sam"
// user.welcomeMsg()
// console.log(this);

// function chai() {
//     // We do not used this keyword inside the function
//     let userName = "Sandesh"
//     console.log(this.userName)
// }
// chai()


// const chai = function () {
//     let username = "Sandesh"
//     console.log(this.username);
    
// // }
// const chai =  () => {
//     let username = "Sandesh"
//     console.log(this.username);
    
// }
// // chai()


// // const addTWo = (num1 , num2) => {
// //     return num1 + num2 
// // }
// // const addTWo = (num1 , num2) => (num1 + num2) 
// const addTWo = (num1 , num2) => ({username : "Sandesh"})
// console.log(addTWo(3, 5));


// ================= Immideately invoked Function Expressions ========================

(function chai( ) {
    console.log("DB Connected");
})();

(  (name) => {
    console.log(`DB Connected two ${name}`);
})("sandesh")







