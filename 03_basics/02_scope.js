// ************* Scope ***************** 
// Note :- we do not used varvariable , because it's not follow scope method
// note :- outer variables = Global scope and Inner variable = block scope {}
// var c = 300;
/*
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
}
console.log(a);
console.log(b);
console.log(c); */

// ************ Nested Scope ******************
function one(){
    const name="Sandesh";

    function two(){
        const website="Youtube"
        // console.log(name);
    }
    // console.log(website);

    two()
}

one()

// ************* If-Else *******************
if (true) {
    const username = "Sandesh";
    if (username === "Sandesh" ) {
        const website = " Youtube";
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// +++++++++++++++++++++++ Interesting ++++++++++++++++++++++++

console.log(addone(5))
function addone(num1) {
    return num1 + 1;
}

// In which we used function and varibale at both time so we got error,
// Cannot access 'addtwo' before initialization
addtwo(5);
const addtwo = function (num) {
    return num + 2;
}
