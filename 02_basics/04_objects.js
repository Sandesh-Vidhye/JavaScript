const { use } = require("react")

const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Sam"
tinderUser.isLogIn = false

// console.log(tinderUser);

const regularUser = {
    email : "sandesh@gmail.com",
    fullname : {
        userName : {
            FristName : "Sandesh" ,
            lastName : "Vidhye",
        },
    },
    contact : 123456789
}
// console.log(regularUser)
// console.log(regularUser.contact)
// console.log(regularUser.fullname.userName.FristName)


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj4 = {5 : "e" , 6 : "f"}

//Combining of Objects by using assign method 
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

// By using Spred method means {...x , ....y }
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id1 : 1,
        email : "sandesh@123.com"
    },
    {},
    {},
    {},
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//Object Distructured 
const course ={
    couseName : "JS-HIndi",
    price : "0001",
    courseStudent : "Sandesh"
}

const {courseStudent:student} = course
console.log(student);

// *************** API = Application Program Interfece ***********************
// {
//     "name" : "Sandesh",
//     "courseName" : "JsHindi",
//     "price" : "free"
// }

[
    {},
    {}
]

