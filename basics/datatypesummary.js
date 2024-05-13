//js is dyamnic typed language

//# Primtive - it callback by value. 
//it have 7 types : String,Number, Boolean, null, undefined ,symbol,BigInt

const id= Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);


//Reference type(non-permitive)- it callback by reference
// Array, Objects ,Functions
const hero =["spderman","ironman","deadpool"]

let obj={
    name:"golu",
    age:18
}

const myfunction= function(){
    console.log("hello world!");
}
