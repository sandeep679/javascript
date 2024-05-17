//js is dyamnic typed language

//# Primtive - it callback by value. 
//it have 7 types : String,Number, Boolean, null, undefined ,symbol,BigInt

// const id= Symbol('123')
// const anotherid=Symbol('123')
// console.log(id===anotherid);


//Reference type(non-permitive)- it callback by reference
// Array, Objects ,Functions
// const hero =["spderman","ironman","deadpool"]

// let obj={
//     name:"golu",
//     age:18
// }

// const myfunction= function(){
//     console.log("hello world!");
// }



//******************************************************************************** */

//stack and heap memory

let myyoutubename="gogo"

let anothernname= myyoutubename
myyoutubename ="zeo"

console.log(anothernname);
console.log(myyoutubename);


let user1 ={
    email:"hero@google,com",
    upi :"user@ybl"

}
let user2= user1
user2.email="yoyo@google.com"
console.log(user1.email);    //we get same value because value is changed
console.log(user2.email);