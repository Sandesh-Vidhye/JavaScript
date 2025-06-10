// ++++++++++++++++++ IF STATEMENT +++++++++++++++++
if (5 == 3 ) {          
    // console.log('hello');
}
else{
    // console.log('bye');
    
}

const score = 200 ;
if (score >100) {
    const power = "fly";
    // console.log(`user power : ${power}`);
}

const balance = 1000;
// if (balance>500) console.log("test");

//  && AND , || OR
const userLogIn = true 
const debitCard = false 
if (userLogIn && debitCard && 2 == 4 && 5<6) {
    // console.log("Allow to buy Course");
}
if (userLogIn || debitCard) {
    // console.log("Allow");
    
}

// ++++++++++++++++++++ Switch Statement +++++++++++++++++++++++
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 7;
// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr");
//         break;

//     default:
//         console.log('Nothing');
//         break;
// }

// ++++++++++++++++++++ True and False ++++++++++++++++++++

const userEmail = []
if (userEmail) {
    console.log("Got usr email");
}else{
    console.log("Don't have user email");
}

/*
Falsy value 
false, 0, -0, BigInt 0n, "", null, Undefined, Nan 

Truthy value 
true, 1, [], "0",'false', " ", {}, function(){}
*/

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const wmptyObj = {}

if (Object.keys(wmptyObj).length === 0) {
    console.log("Obj is empty ");
}
