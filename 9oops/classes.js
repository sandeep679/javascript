//ES6

// class user{
//     
//       constructor(username,email,password){

//         this.username=username;
//         this.email=email;
//         this.password=password
//     }

//     encryptPassword(){
//         return`${this.password}abc`
//     }
//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai= new user("samay","samay2gmail","123")
// console.log(chai.encryptPassword());
// console.log(chai.changeusername());

                      


                           //behind the sence


function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password

}
user.prototype.encryptPassword = function(){
    return`${this.password}abc`
}
user.prototype.changeusername = function(){
    return`${this.username.toUpperCase()}`
}
const tea  = new user("tea","tea@gmail.com","34422")
console.log(tea.encryptPassword());
console.log(tea.changeusername());