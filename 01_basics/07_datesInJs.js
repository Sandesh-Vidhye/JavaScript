// Dates

// let mydate =new Date()
// console.log(mydate); // Current date and time   
// console.log(mydate.toString());
// console.log(mydate.toDateString()); // Date in string format
// console.log(mydate.toTimeString()); // Time in string format
// console.log(mydate.toISOString()); // ISO format
// console.log(mydate.toLocaleDateString()); // Local date format
// console.log(mydate.toLocaleTimeString()); // Local time format
// console.log(mydate.getFullYear()); // Get year
// console.log(mydate.getMonth()); // Get month (0-11)
// console.log(mydate.getDate()); // Get date (1-31)
// console.log(mydate.getDay()); // Get day (0-6)
// console.log(mydate.getHours()); // Get hours (0-23)
// console.log(mydate.toJSON());
// console.log(typeof mydate); // Object


let mynewdate = new Date("05-26-2025"); // ISO format
// console.log(mynewdate.toDateString()); // Specific date and time


let myTimestamp = Date.now(); // Current timestamp in milliseconds
// console.log(myTimestamp); // Current timestamp
// console.log(mynewdate.getTime()); // Timestamp of specific date
// console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}))
