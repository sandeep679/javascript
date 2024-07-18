class user{
        
          constructor(username){
    
            this.username=username;
           
        }
        logme(){
            console.log(`username is ${this .username}`);
        }
    }

    class teacher extends user{

        constructor(username,email,password){
            super(username)       // it automatically refer to extends class  and constructor with automatically this keyword            
            this.email =email
            this.password=password
        }
        addcourse(){
            console.log(`1new course was added by ${this.username}`);
        }
    }
    const chai = new teacher("samay","samay@gmail","3324")
    chai.addcourse()
    chai.logme()

    const tea = new user("tea")
    tea.logme()

    console.log(chai instanceof teacher);