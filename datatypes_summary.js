//  Primitive 
// 7 Types :- Strings Number BigInt Boolean Undefined Null Symbol

// Reference Type or NOn Primitive
// Arrays, Objects, Functions 

const score = 100 
const score1 = 100.3
const score2 = 1

const isLogIn = false
const temp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) 

/*datatyoe of string = String 
  Number = number 
  Null = object
  Symbol = Symbol 
  Undefined = undefined

  Array = object
  Object = Function
  function =function
*/

const heros = ['Thor', 'Ironman', 'Hulk']
let myObj = {
    age : 22,
    name: 'John',
}
const myFunc = function() {
    console.log('Hello')
}


console.log(typeof heros) // number;

