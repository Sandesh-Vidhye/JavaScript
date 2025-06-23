// const { use } = require("react");

// Promisses
const promiseOne = new Promise(function(resolve, rejection) {
    // Do an asyn task
    // DB calls , netweork , cryptography
    setTimeout(function() {
        // console.log("Aysn task is complete");
        resolve();
    }, 1000);
})
promiseOne.then(function() {
    // console.log("Promise Consumed");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        // console.log("Asynchornous task 2 ");
        resolve();
    }, 1000)
}).then(function() {
    // console.log("Asyn 2 resolved");
})


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({ username: "Chai Aur code ", email: "example@.com" })
//     }, 1000)
// })
// promiseThree.then(function(user) {
//     // console.log(user);
// })

// const prmoisefour = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false;
//         if (!error) {
//             reslove({ username: "sandesh", password: "12345" });
//         } else {
//             reject('error : something went wrong');
//         }
//     }, 1000);
// })
// prmoisefour.then((user) => {
//         console.log(user);
//         return user.username;
//     })
//     .then(() => {
//         console.log(username);
//     })
//     .catch(function(error) {
//         console.log(error);
//     }).finally(function() {
//         console.log("The promise is either is resloved or....");
//     })

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        } else {
            reject('ERROR : Js in Five');
        }
    }, 1000);
});
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log("Error", error);

    }
}
consumePromiseFive();