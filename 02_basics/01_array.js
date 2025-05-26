// arrays

const myArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; 
console.log(myArr[3])

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[3])

// ***************** Array methods  ****************************   
console.log(myArr.length); // 5
console.log(myArr.push(6)); // 6    
console.log(myArr); // [1, 2, 3, 4, 5, 6]
console.log(myArr.pop()); // 6

myArr.push(6); // Adds 6 to the end of the array
myArr.unshift(0); // Adds 0 to the beginning of the array
myArr.shift(); // remove element of the beginning of the array

console.log(myArr.includes(7));
console.log(myArr.indexOf(3)); // 2

const newArr = myArr.join() // Converts the array to a string
const newArr = myArr.join(' & '); // Converts the array to a string with ' & ' as separator


// Slice and splice
console.log("A", myArr)

const myn1 = myArr.slice(1,3); // Returns a new array from index 2 to the end
console.log(myn1); // [2, 3]
console.log("B", myArr) // Original array remains unchanged

const myn2 = myArr.splice(1,3);  // removes elements from index 1 to 3 and returns them
console.log("C",myArr); 
console.log(myn2); // [2, 3, 4]

console.log(myArr);
myArr.splice(2, 3); // Removes 3 elements from index 2
myArr.splice(2, 0, 3); // Adds 3 at index 2 without removing any elements
myArr.splice(2, 0, 4, 5); // Adds 4 and 5 at index 2 without removing any elements


console.log(myArr); // [1, 2, 3, 4, 5, 6]
console.log(newArr);
