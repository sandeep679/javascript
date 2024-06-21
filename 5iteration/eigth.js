///  REDUCE
const mynum=[1,2,3]

// const total =mynum.reduce( function (acc,currval){
//     console.log(`acc : ${acc} and curval " ${currval} `);
//     return acc+currval
// },3)

// console.log(total);


// const total2 =mynum.reduce( (acc,currval)=>{
//     console.log(`acc : ${acc} and curval " ${currval} `);
//     return acc+currval
// },3)

// console.log(total2);

// const total3=mynum.reduce((acc,currval)=>acc+currval,0)
// console.log(total3);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total =shoppingCart.reduce((acc,item)=>acc+item.price,0) // isme item har object ko denote kr raha hai
console.log(total);