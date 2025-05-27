const marvel_heros = ["thor","Ironman","hulk","black widow","captain america"];
const dc_heros = ["superman","batman","Flash","green lantern","aquaman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // ["thor", "Ironman", "hulk", "black widow", "captain america", Array(5)]

// // Merge two arrays using concat
const hero = marvel_heros.concat(dc_heros);
// console.log(hero); // ["thor", "Ironman", "hulk", "black widow", "captain america", Array(5)]
// console.log(marvel_heros.concat(dc_heros)); // ["thor", "Ironman", "hulk", "

// Spred operator
const hero2 = [...marvel_heros, ...dc_heros];
// console.log(hero2); // ["thor", "Ironman", "hulk", "black widow", "captain america", "superman", "batman", "Flash", "green lantern", "aquaman"]

// array in array
const array = [1, 2, [3, 4], 5, [6, 7,[9, 10], 8]];
const real_array = array.flat(Infinity); // Flattens the array to a depth of 2
// console.log(real_array); // [1, 2, 3, 4, 5, 6, 7, 9, 10, 8]


// console.log(Array.isArray("Sandesh"))
// Check if a variable is an array
// console.log(Array.from("Sandesh")) // Converts a string to an array of characters;
// console.log(Array.from ({name: "Sandesh"})) // Converts an object to an array of key-value pairs;

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
console.log(Array.from(score1, score2, score3, score4)) // Creates an array from the arguments passed
