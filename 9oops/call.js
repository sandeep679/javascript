 function setusername(username){
    //complex DB calls
    this.username= username
    console.log("called");
 }

 function createuser(username,email,password){
    setusername.call(this,username) // this is used for reference  in call in above this . and it is current context
                                      // call  is pass current execution context to other function
    this.email=email
    this.password =password
 }
 const chai = new createuser("samay","samay@fbi","123")
 console.log(chai);