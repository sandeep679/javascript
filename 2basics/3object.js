//singleton -- constructor who make single object
//object.create

//object literals

const mysym =Symbol("key3")

const user ={
    name :"flash",
    [mysym]:"mykey1",
    age :19,
    location: "delhi",
    email:"yoyo@gmail.com",
    loggedin:false,
    lastlogin: ["monday","saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mysym]);


//Object.freeze(user) // freeze the enities in object

user.email ="zero@gmail.com" // to change entity in object by overwrite
//console.log(user.email);



user.greeting = function(){
    console.log("HELLO USER");
}
user.greeting2 = function(){  //string interpalnation
    console.log(`HEllO user,${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());

