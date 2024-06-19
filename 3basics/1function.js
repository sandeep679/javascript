// function add(num1,num2){
//     console.log(num1+ num2);
// }
// add(3,4)

// function add(num1,num2){
//      let result =num1+num2;
//      return result
//     return num1+num2
// }
// const result=add(3,4)
// console.log("Result:",result);



// function loginuser(username){
//     return `${username} just logged in`
// }
// console.log(loginuser("SAMAY"));



// function loginuser(username){
//     if(username==undefined)
//         {
//             console.log("please enter username");
//             return
//         }
//     return `${username} just logged in`
// }
// console.log(loginuser("SAMAY"));


// function loginuser(username ="hero"){
//     if(username==undefined)
//         {
//             console.log("please enter username");
//             return
//         }
//     return `${username} just logged in`
// }
// console.log(loginuser("SAMAY"));



            //rest operator
//    function calculatecart(...num1){    
//     return num1


//    }
//    console.log(calculatecart(220,200,300));

// function calculatecart(val1,val2,...num1){    
//     return num1
//  }
//    console.log(calculatecart(220,200,300,690));




             // object with function
        // const user={
        //     username:"samay",
        //     price:199
        // }

        // function handle(anyobject){
        //     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
        // }
        // handle(user) // we can pass object directly in handle


        ///  array with function
        
        const myarray =[2,5,7,8,9]
         function returnvalue(getArray){
            return getArray[1]
         }
         console.log(returnvalue(myarray));