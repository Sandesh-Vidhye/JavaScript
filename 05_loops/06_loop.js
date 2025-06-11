// 
// const MYnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NewNUm = MYnum.map( (value) => value + 10)
// console.log(NewNUm);

// const NewNUM= []
// MYnum.forEach( (item) => {
//     NewNUM.push(item + 10)
// })
// console.log(NewNUM);

// const newNUms = MYnum
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40 );

// console.log(newNUms);


// `````````````````````` Reduce Method `````````````````````````

// const MYnum = [1,2,3]
// const Initial = 0;
// const sumwithInitialArray = MYnum.reduce(
//     (accumulator , current ) => accumulator + current, Initial
// )
// console.log(sumwithInitialArray);

const shoopingCard = [
    {
        itemname : "Js",
        price : 1999
    },
    {
        itemname : "py",
        price : 999
    },
    {
        itemname : "java",
        price : 2999
    },
    {
        itemname : "rust",
        price : 4999
    }
]

const Payment = shoopingCard.reduce( (acc, item) => acc + item.price, 0)
console.log(Payment);


