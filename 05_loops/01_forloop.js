// For loop 
for (let i = 0; i <=  10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}



for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`);
    for (let j = 1; j <= 10.; j++) {
        // console.log(`Inner loop...............${j}`);
        // console.log(i + '*' + j + ' = '+ i*j)
    
    } 
}


let Myarray = ["flash", "batman", "Superman"]
for (let index = 0; index < Myarray.length; index++) {
    const element = Myarray[index];
    // console.log(element);

}



// break and continue
// for (let index = 0; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detrected 5 `);
//         break
//     }
//     console.log(` Value os i is ${index}`);
// }
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(` Detrected 5 `);
        continue
    }
    console.log(` Value os i is ${index}`);
}
