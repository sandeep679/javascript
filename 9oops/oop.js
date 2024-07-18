 // obeject literal - make object

//  const user ={
// username:"Samay",
// logincount:8,
// signedIn:"true",

// getUserDetails: function(){
//  //console.log("Got user details");
//  //console.log(`Username :${this.username}`);
//  console.log(this);
// }
// }

//  console.log(user.username);
//  console.log(user.getUserDetails());




 // constructor function -- it gives new instance 


//  const promise = new Promise()
//  const date = new date ( )        // new keyword is constructor function . it allow create mulitple instance from one object literals
 
function user(username,logincount,isloggedIN){
this.myusername = username;
this.logincount=logincount;
this.isloggedIN =isloggedIN

return  this   /// object is pass on  and value will accessible
 }



//  const userOne =user("Samy",12,true )
//  const userTwo =user("Honey",11,false )       // it overwrite the value 
//  console.log(userOne);

 const userOne =new user("Samy",12,true )
 const userTwo =new user("Honey",11,false )       // it overwrite the value 
 console.log(userOne);
 console.log(userTwo);
                                   //read  instanceof