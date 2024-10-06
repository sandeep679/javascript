const user ={
    username: "samay",
    price:99,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);   // it show current context in object
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

//console.log(this); // it show empty in node but it show window in browser because window is global

// function chai(){
//     let username ="samay"     // it show undefined because this is working on object in the context
//     console.log(this.username);
// }
// chai()


                     ///   arrow function

// const chai = ()=>
// {
//         let username ="samay"
//         console.log(this.username);
//     }
//     chai()
    
//  const addtwo =(num1,num2)=>{
//     return num1+num2

//  }
//  console.log(addtwo(3,4));


//const addtwo =(num1,num2)=>  (num1+num2) // expilit return
const addtwo =(num1,num2)=>  ({username:"samay"})  //expilit return of objects


console.log(addtwo(3,4))

