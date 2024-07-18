class user{
        
    constructor(username){

      this.username=username;
     
  }
  logme(){
      console.log(`username is ${this .username}`);
  }
  static createid(){     //static keyword stop  access methods and property jo bhi input karwaoge
    return `1234`
  }
}
const samay = new user("samay")
//console.log(samay.createid());

class teacher extends user{

    constructor(username,email){
        super(username)       // it automatically refer to extends class  and constructor with automatically this keyword            
        this.email =email
        
    }
}
const phone = new teacher("iphone","iphone@com")
phone.logme()
console.log(phone.createid());   //static dont give access to inheritance and class

