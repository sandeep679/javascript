             //1 Promise
const promiseOne= new Promise(function(resolve,reject){
    //do an async task
    //db calls , cryptography, network
    setTimeout(function(){

        console.log('Async task is complete');
        resolve() /// it use to execute resolve
    },1000)

})    // creation of promiseand it is call back
     
promiseOne.then(   function(){            /// .then have connection with resolve and callback
 console.log("Promise consumed");
}) 
 
         //2 promise

new Promise(function(resolve,reject){

    setTimeout(function(){

        console.log("Async taske 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

 


                      // 3 promise

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"Samay", email: "samay@example"}) /// it pass parameter
  },1000)


})
promiseThree.then(function(user){

    console.log(user);

})

                 // 4 promise

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = false
      if(!error){
        resolve({username:"Samay2", password: "123@example"})
      }else{
        reject('ERROR : Something went wrong')
      }
    },1000)
})
//callback helll
promiseFour.then((user)=>{                       
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error) {
    console.log(error);
    
})
.finally(()=> console.log("PROMISE IS ACCEPT OR REJECT"))





               // 5 promise
               // async and await

               const promiseFive = new Promise(function(resolve, reject){
                setTimeout(function(){
                    let error = false
                    if (!error) {
                        resolve({username: "javascript", password: "123"})
                    } else {
                        reject('ERROR: JS went wrong')
                    }
                }, 1000)
            });
    
//  async function consumePromiseFive(){
//     const response =await promiseFive           // async function and await
//     console.log(response);
//  }
//  consumePromiseFive()

 async function consumePromiseFive(){
   try {                                          // try and catch block
    
        const response =await promiseFive
        console.log(response);
     
        
   } catch (error) {
    console.log(error);
   }
  }
consumePromiseFive()
    



        //fetch
// async function getALLusers(){
//     try {
//         const response = await fetch('https://randomuser.me/api/ ')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }

// getALLusers()


                          //fetch chaining

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);})
.catch((error)=>console.log(error))


// khud fetch documentation padho