//Function Syntax
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName() //Print statemnet
//                  parametres (num1 ,num2)
// function addTwoNUm(num1, num2){ 
//     console.log(num1 + num2 ); 
// }
// Arguments (3, 6)
// addTwoNUm(3, 6)


// function addTwoNUm(num1, num2){ 
//     // Method 1
//     // let result = num1 + num2
//     // console.log("sandesh");
//     // return result
    
//     //Method 2
//     return num1 + num2
// }
// const result = addTwoNUm(3, 5)
// // console.log( "Result:",result);


// when parameters are empty it means result is undefined 
// function logInuserMsg (username = "Sam"){ // and when you passed value in Arguments then when para. is empty it accept the args. value ("Sam")
//     if (username == undefined) {
//         console.log("Please enter your name");
//         return
//     }
//     return `${username} just logged In`
// }
// // console.log(logInuserMsg("Sandesh"))
// console.log(logInuserMsg("Sandesh"))

// rest ( ... ) how to use and when 
function CalCarPrice(val1, val2, ...num1){
    return num1
}
console.log(CalCarPrice(200, 400, 500 , 600 ,950))


// Objects used in Function 
const user ={
    username : "Sandesh",
    price: 199,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// We can directly pass Object in this way 
handleObject({
    username : "Sam",
    price : 399
})


// Array used in Function 
const MyNewArray =[ 200, 400 ,500, 300]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(MyNewArray));














