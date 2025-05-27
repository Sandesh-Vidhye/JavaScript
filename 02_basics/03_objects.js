// Objects 
 
// objects are a collection of key-value pairs
// objects are mutable
// objects are reference types
// objects are not iterable

//Symbols are used to create unique property keys
// const mysum = Symbol("sum");
// Example of using a symbol as a property key
// by using bracket notation in obejects it's denote the symbol as a key

//objects literal
const person = {
    name: "Sandesh",
    age: 21,
    isMarried: false,
    hobbies: ["reading", "web-series", "coding"],
    // [mysum]: "mykey1",
    // address: {
    //     city: "Pune",
    //     state: "Maharashtra"
    // },
    // greet: function() {
    //     console.log(`Hello, my name is ${this.name}`);
    // }
};

// console.log(person);
// Accessing object properties
// console.log(person.name); // Dot notation
// console.log(person["age"]); // Bracket notation
// console.log(person[mysum]);

// person.name = "John"; // Modifying a property
// console.log(person.name); // John
// Object.freeze(person); // Freezing the object to prevent further modifications
// Object.freeze(person.age); // Freezing the object to prevent further modifications
// person.name = "Jack"; // Modifying a property
// console.log(person); // John (remains unchanged due to freeze)

person.greeting = function() {
    console.log("hello JS Users");
}
person.greetingtwo = function() {
    console.log(`hello, my name is ${this.name}`);
    console.log("hello, my name is " + this.name);
}
console.log(person.greeting()); // Function reference
console.log(person.greetingtwo());
