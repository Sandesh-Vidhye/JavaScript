// for of loop 
const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Map
const map = new Map();
map.set('In',"India")
map.set('USa',"America")
map.set('In',"India")

// console.log(map);
for (const [key, value] of map) {
    // console.log(key,":-", value);
    
}
// forof loop can't perform on objects, objects is not interable


// Try in another way 
// forIn loop

// objects
const Myobj = {
    js : "javasc",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in Myobj) {
    // console.log(key , ":- ", Myobj[key]);
    
}

// array
const language = ['js', 'C', 'java', 'Python', 'Rust']
for (const key in language) {
    console.log(language[key]);
}

